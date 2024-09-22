import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearCredentials, setCredentials } from "./authSlice";
import { toast } from "react-hot-toast";

export const loginUser = createAsyncThunk(
  "user/login",
  async (payload, { dispatch, rejectWithValue }) => {
    axios.defaults.withCredentials = true;

    try {
      const { data } = await axios.get("http://localhost:5000/auth/user/me");
      dispatch(setCredentials(data));
      // toast.success("Logged in");
      return data;
    } catch (error) {
      toast.error(rejectWithValue(error.response.data));
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (payload, { dispatch }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/auth/logout");
      dispatch(clearCredentials());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.LoggedInUser = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });
    ////////////////////////////////////////////////////////////////
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = true;
      state.loggedOutUser = action.payload;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
