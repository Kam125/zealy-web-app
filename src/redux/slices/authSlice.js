import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { toast } from "react-toastify";


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
        return data?.data;
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
        onSuccess();
        return data?.data;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);

// export const logout = createAsyncThunk (
//   ()=> {
//     console.log('logout called')
//   }
// )


const initialState = {
  authLoading: false,
  user: null,
  isSignedIn: false,
  token: sessionStorage.getItem("token"),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state)=> {
      state.token=null;
      sessionStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      state.authLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.authLoading = false;
      sessionStorage.setItem("token", action?.payload?.token);
      state.token = action?.payload?.token;
      state.isSignedIn = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.authLoading = false;
      // sessionStorage.clear("token");
    });
    builder.addCase(login.pending, (state, action) => {
      state.authLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.authLoading = false;
      sessionStorage.setItem("token", action?.payload?.token);
      state.token = action?.payload?.token;
      state.isSignedIn = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authLoading = false;
      sessionStorage.clear("token");
    });
  },
});

export const { logout } = authSlice.actions

export default authSlice.reducer;