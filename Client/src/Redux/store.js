import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import whiteListSlice from "./whiteListSlice";

const store = configureStore({
  reducer: { auth: authSlice, user: userSlice, white: whiteListSlice },
  devTools: true,
});

export default store;
