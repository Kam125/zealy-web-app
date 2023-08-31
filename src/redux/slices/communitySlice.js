import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { toast } from "react-toastify";
import Repository from "../../repository/Repository"



var communityRepo = RepositoryFactory.get("community");

export const createCommunity = createAsyncThunk(
  "community/createCommunity",
  async (payload) => {
    try {
        const data = await communityRepo.createCommunity(payload);
        if (data?.status === 201) {
          
        //   Repository.defaults.headers.Authorization = data?.data?.token;
        toast.success("Community Created Successfully");
        // console.log(data?.data)
        return { data: data?.data };
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const getAllCommunities  = createAsyncThunk(
    "web/getAllCommunities",
    async () => {
      try {
        const data = await communityRepo.getAllCommunities();
        if (data.status === 200) {
          return data?.data;
        }
      } catch (error) {
        toast.warn(error?.response?.data?.message);
        // return thunkAPI.rejectWithValue();
      }
    }
  );

const initialState = {
  webLoading: false,
  data: [],
  token: localStorage.getItem("token"),
};
const communitySlice = createSlice({
  name: "community",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createCommunity.fulfilled, (state, action) => {
      console.log(action.payload)
      state.webLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(getAllCommunities.fulfilled, (state, _action) => {
        console.log(_action.payload)
        state.data=_action.payload
      });
  },
  reducers: {},
});

export default communitySlice.reducer;