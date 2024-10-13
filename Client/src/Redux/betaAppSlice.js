import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createBetaApp = createAsyncThunk(
  "beta/create",
  async (betaApp) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        "http://localhost:5000/betaApp",
        betaApp
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const betaAppSlice = createSlice({
  name: "beta",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(createBetaApp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBetaApp.fulfilled, (state, action) => {
      state.loading = false;
      state.createdBetaApp = action.payload;
    });
    builder.addCase(createBetaApp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default betaAppSlice.reducer;
