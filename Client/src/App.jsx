import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useDispatch } from "react-redux";
import { loginUser } from "./Redux/userSlice";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginUser());
  }, []);

  // const [user, setUser] = useState(null);
  // async function getMe() {
  //   const response = await axios.get("http://localhost:5000/auth/user/me");
  //   axios.defaults.withCredentials = true;
  //   console.log(response);
  //   // setUser(response.data);
  // }

  // useEffect(() => {
  //   getMe();
  // }, []);
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <SpeedInsights />
    </div>
  );
};

export default App;
