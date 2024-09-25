import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useDispatch } from "react-redux";
import { loginUser } from "./Redux/userSlice";

import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  return (
    <div className="relative">
      <Toaster position="top-right" />
      <Navbar />

      <Outlet />
      <SpeedInsights />
    </div>
  );
};

export default App;
