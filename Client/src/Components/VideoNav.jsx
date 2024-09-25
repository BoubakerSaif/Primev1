import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/userSlice";
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";

const VideoNav = () => {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const { userInfo } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full h-full relative flex justify-center items-center bg-[#010101]  ">
      <video
        src={
          "https://res.cloudinary.com/dl6o7cgmp/video/upload/v1727220400/Gray_Red_Bold_History_YouTube_Thumbnail_3_ag3yta.mp4"
        }
        autoPlay
        loop
        muted
        className={`w-full ${location.pathname == "/rpguide" ? "hidden" : ""}`}
      />
      <div
        className={`flex justify-around text-white w-full font-Poppins top-0 px-5  ${
          location.pathname == "/rpguide" ? "" : "absolute "
        }  mt-6`}
      >
        <div className="lg:hidden max-lg:block max-lg:mt-1">
          {show && (
            <IoMdArrowDropup
              className="w-fit text-3xl  hover:border-2 hover:cursor-pointer rounded-md mt-1"
              onClick={() => {
                setShow(!show);
              }}
            />
          )}
          {show == false && (
            <FaBars
              className="w-fit text-3xl  hover:border-2 hover:cursor-pointer rounded-md mt-1"
              onClick={() => {
                setShow(!show);
              }}
            />
          )}
        </div>
        <div className="flex gap-9 max-lg:gap-0 text-white    ">
          <Link to="/#" className=" text-4xl flex  gap-1 font-bold  ">
            <div className="group lg:hover:scale-125 duration-500  ">
              <span className="text-white text-5xl group-hover:[text-shadow:0px_0px_40px_rgba(255,255,255,1)] group-hover:brightness-200 ">
                P
              </span>
              <span className="group-hover:[text-shadow:0px_0px_40px_rgba(255,255,255,1)] text-4xl group-hover:brightness-200">
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
          <Link
            to="/joinus"
            className=" text-gray-300 brightness-90  hover:text-white hover:brightness-200 hover:shadow-white duration-300 hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] hover:scale-105  "
          >
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
            className="mt-3 max-lg:mt-2 bg-indigo-600 p-2 rounded-md  font-medium h-fit hover:shadow-[0px_0px_30px_rgba(48,63,159,1.000)] duration-300 flex gap-1 items-center hover:scale-110"
          >
            <span>Login</span>
            <FaDiscord className="inline text-[20px]" />
          </Link>
        )}
      </div>
      <div className="lg:hidden absolute max-md:top-[30%] max-lg:top-[25%] h-fit ">
        {show && (
          <div className="w-screen text-white text-center flex justify-center gap-4   items-center    text-sm font-semibold   ">
            <Link className=" rounded-md bg-[##0e0e0f] w-fit  ">HOME</Link>
            <Link className=" rounded-lg bg-[##0e0e0f] w-fit  ">
              HOW TO JOIN
            </Link>
            <Link className=" rounded-lg bg-[##0e0e0f] w-fit  ">ABOUT US</Link>
            <Link className=" rounded-lg bg-[##0e0e0f] w-fit  ">CONTACT</Link>
          </div>
        )}
      </div>

      <Link
        target="_blank"
        to="https://youtu.be/sk9slehg6Rc?si=qP6i1yfv5_2QqB6Q "
        className={`${
          location.pathname == "/rpguide" ? "hidden" : ""
        } group absolute top-[60%] max-lg:top-[80%] flex items-center justify-around py-2 max-lg:w-40 w-60 rounded-full cursor-pointer group-hover:brightness-150 border-white border-2  hover:bg-white hover:shadow-[0px_0px_50px] hover:shadow-white   `}
      >
        <FaPlayCircle className="text-5xl  text-white sm:text-3xl group-hover:text-black " />
        <button className="text-white font-Poppins font-bold text-xl  group-hover:text-black max-lg:text-sm   ">
          Watch Trailer
        </button>
      </Link>
    </div>
  );
};

export default VideoNav;
