import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="w-full h-full relative flex justify-center items-center  ">
      <video
        src={
          "https://res.cloudinary.com/dl6o7cgmp/video/upload/v1726865005/gta_e5kcac.mp4"
        }
        autoPlay
        loop
        muted
        className=" max-lg:hidden w-full  grayscale brightness-50 "
      />
      {/* <div className="bg-[#161616cc] h-full w-full absolute top-0 max-lg:hidden"></div> */}
      <div className="flex justify-around text-white w-full font-Poppins top-0 px-5 absolute mt-6 max-lg:hidden">
        <div className="flex gap-9 max-lg:gap-0 text-white   ">
          <Link to="/#" className=" text-4xl flex  gap-1 font-bold  ">
            <div className="group lg:hover:scale-125 duration-500  ">
              <span className="text-pink-600 text-5xl group-hover:[text-shadow:0px_0px_20px_rgba(219,39,119,1)] group-hover:brightness-125 ">
                P
              </span>
              <span className="group-hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] text-4xl group-hover:brightness-125">
                rime
              </span>
            </div>
          </Link>
          <div className=" mt-3 ml-3 h-fit flex items-center gap-2 bg-black bg-opacity-30 p-1  rounded-lg">
            <IoPeopleSharp className="text-xl" />
            <p>: 0</p>
          </div>
        </div>
        <div className="flex justify-between gap-10  mr-48 lg:mr-0 font-medium cursor-pointer h-fit max-lg:hidden text-base mt-4 ">
          <Link className=" text-gray-300 brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105   ">
            HOME
          </Link>
          <Link className=" text-gray-300 brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105  ">
            HOW TO JOIN
          </Link>
          <Link className=" text-gray-300 brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105  ">
            ABOUT US
          </Link>
          <Link className="  text-gray-300 brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105   ">
            CONTACT
          </Link>
        </div>
        {userInfo ? (
          <div className="flex items-center gap-5 ">
            <p className="mt-2"> {userInfo?.global_name} </p>
            <img
              src={`https://cdn.discordapp.com/avatars/${userInfo?.discord_id}/${userInfo?.discord_avatar}`}
              className="w-14 h-14 mt-1 rounded-3xl"
            />
            <Link
              onClick={logout}
              className=" mt-2 bg-indigo-600 p-2 rounded-md  font-medium h-fit hover:shadow-[0px_0px_30px_rgba(48,63,159,1.000)] duration-300 flex gap-1 items-center hover:scale-110"
            >
              <span>Logout</span>
            </Link>
          </div>
        ) : (
          <Link
            to={"http://localhost:5000/auth"}
            className="mt-4 bg-indigo-600 p-2 rounded-md  font-medium h-fit hover:shadow-[0px_0px_30px_rgba(48,63,159,1.000)] duration-300 flex gap-1 items-center hover:scale-110"
          >
            <span>Login</span>
            <FaDiscord className="inline text-[20px]" />
          </Link>
        )}
      </div>

      <Link
        to="/"
        className=" absolute flex items-center justify-around py-2 w-60 rounded-full cursor-pointer group-hover:brightness-125 border-pink-600 border-2 hover:bg-pink-600 hover:shadow-[0px_0px_100px] hover:shadow-pink-600  max-lg:hidden  "
      >
        <FaPlayCircle className="text-5xl text-white sm:text-3xl  " />
        <button className="text-white font-Poppins font-bold text-xl    ">
          Watch Trailer
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
