import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { toast } from "react-toastify";
import Repository from "../../repository/Repository";

var authRepo = RepositoryFactory.get("auth");

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ payload, onSuccess }, thunkAPI) => {
    try {
      const data = await authRepo.signup(payload);
      if (data?.status === 201) {
        toast.success("User Registered Successfully");
        // Repository.defaults.headers.Authorization = data?.data?.token;
        onSuccess();
        return { data: data?.data };
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({payload, onSuccess}, thunkAPI) => {
    try {
      const data = await authRepo.login(payload);
      if (data?.status === 201) {
        toast.success("User Logged In Successfully");
        // Repository.defaults.headers.Authorization = data?.data?.token;
        onSuccess();
        return data?.data;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);


const initialState = {
  authLoading: false,
  user: null,
  token: localStorage.getItem("token"),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      state.authLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.authLoading = false;
      // localStorage.setItem("token", action?.payload?.data?.token);
      state.user = action?.payload?.data?.user;
      state.token = action?.payload?.data?.token;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.authLoading = false;
      // localStorage.clear("token");
    });
    builder.addCase(login.pending, (state, action) => {
      state.authLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
      state.authLoading = false;
      localStorage.setItem("token", action?.payload?.token);
      state.user = action?.payload?.data?.user;
      state.token = action?.payload?.data?.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authLoading = false;
      localStorage.clear("token");
    });
  },
});

export default authSlice.reducer;