import React, { useState } from "react";
import criminal from "../assets/images/criminal.png";
import doctor from "../assets/images/doctor.png";
import farmer from "../assets/images/farmer.png";
import bsman from "../assets/images/business_man.png";
import governor from "../assets/images/governor.png";
import warden from "../assets/images/warden_1.png";
import herores from "../assets/images/herores.png";
import city from "../assets/images/city.png";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import los from "../assets/images/los.jpg";
import business from "../assets/images/business.jpg";
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
const Hero = () => {
  const [neon, setNeon] = useState("grayscale");
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative h-screen flex justify-center lg:hidden">
        <img
          src={los}
          className={`w-full h-full ${neon} ${
            neon === "grayscale" ? "brightness-50" : ""
          }  `}
        />

        <div className="absolute h-screen flex flex-col justify-between  ">
          <div className="flex flex-col justify-around w-screen items-center text-white mt-9    ">
            <div className=" w-full flex justify-around items-center">
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

              <Link to="/" className="flex items-center font-bold  ">
                <div className="group lg:hover:scale-125 duration-500  ">
                  <span className="text-pink-600 text-5xl group-hover:[text-shadow:0px_0px_20px_rgba(219,39,119,1)] group-hover:brightness-125 ">
                    P
                  </span>
                  <span className="group-hover:[text-shadow:0px_0px_20px_rgba(255,255,255,1)] text-4xl group-hover:brightness-125">
                    rime
                  </span>
                </div>
                <div className=" mt-3 ml-3 h-fit flex items-center gap-2 bg-black bg-opacity-30 p-1 rounded-lg">
                  <IoPeopleSharp className="text-xl" />
                  <p>: 60</p>
                </div>
              </Link>
              <button className=" mt-2 bg-indigo-600 p-2 rounded-md  font-medium h-fit hover:shadow-[0px_0px_30px_rgba(48,63,159,1.000)] duration-300 flex gap-1 items-center hover:scale-110  ">
                <span>Login</span>
                <FaDiscord className="inline text-[20px]" />
              </button>
            </div>
            <div className=" flex justify-center duration-700 ">
              {show && (
                <div className="w-screen text-white text-center flex flex-col items-center h-[200px] absolute text-lg font-semibold   ">
                  <Link className=" rounded-md bg-[##0e0e0f] mt-5 w-full  ">
                    HOME
                  </Link>
                  <Link className=" rounded-lg bg-[##0e0e0f] w-full  ">
                    HOW TO JOIN
                  </Link>
                  <Link className=" rounded-lg bg-[##0e0e0f] w-full  ">
                    ABOUT US
                  </Link>
                  <Link className=" rounded-lg bg-[##0e0e0f] w-full  ">
                    CONTACT
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="  h-screen mx-auto flex flex-col items-center gap-12">
            <img src={herores} className="rounded-full w-[550px]   " />

            <Link
              to="/#"
              className=" text-white flex items-center justify-around py-2 w-60 rounded-full cursor-pointer group-hover:brightness-125 border-pink-600 border-2 hover:bg-pink-600 hover:shadow-[0px_0px_50px] hover:shadow-white "
            >
              <FaPlayCircle className="text-5xl  " />
              <button className="text white font-Poppins font-bold text-2xl   ">
                START NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center  max-lg:hidden w-auto text-white relative">
        {/* <img
          src={business}
          className={`w-full h-full ${neon}  ${
            neon === "grayscale" ? "brightness-50 " : ""
          }  `}
        /> */}
        <img
          src={business}
          className={`w-full h-full grayscale brightness-50`}
        />

        <main className=" flex xl:gap-32 lg:gap-14 absolute lg:mt-8 xl:mt-[60px] 2xl:mt-24   ">
          <div className="flex flex-col gap-10">
            <div className="group flex justify-center items-end max-xl:w-[200px] xl:w-[250px] 2xl:w-[290px]    mt-10 text-center   ">
              <img
                src={criminal}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-3 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-110" : ""
                }${
                  neon == "grayscale-0"
                    ? " shadow-[0px_0px_20px] shadow-white"
                    : ""
                } `}
              />
              <div className="absolute group-hover:-translate-y-2 duration-700 mb-4  group-hover:scale-100 hidden group-hover:block  ">
                <p className=" text-slate-400  text-opacity-80  font-bold flex-col group-hover:block">
                  BECOME
                </p>
                <p className=" text-white font-bold flex-col group-hover:block">
                  CRIMINAL
                </p>
              </div>
            </div>
            <div className="group flex justify-center items-end max-xl:w-[200px] xl:w-[250px] 2xl:w-[290px]  mt-10 text-center  ">
              <img
                src={bsman}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-110" : ""
                } ${
                  neon == "grayscale-0"
                    ? " shadow-[0px_0px_20px] shadow-white"
                    : ""
                } `}
              />
              <div className="absolute group-hover:-translate-y-2 duration-700 mb-4  group-hover:scale-100 hidden group-hover:block  ">
                <p className=" text-slate-400 text-opacity-80 font-bold flex-col group-hover:block">
                  BECOME
                </p>
                <p className=" text-white font-bold flex-col group-hover:block">
                  BUSINESS MAN
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 items-center ">
            <div className="group flex justify-center items-end max-xl:w-[200px] xl:w-[250px] 2xl:w-[290px]  text-center    ">
              <img
                src={doctor}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-110" : ""
                } ${
                  neon == "grayscale-0"
                    ? " shadow-[0px_0px_20px] shadow-white"
                    : ""
                }`}
              />
              <div className="absolute group-hover:-translate-y-2 duration-700 mb-4 scale-75 group-hover:scale-100 hidden group-hover:block   ">
                <p className=" text-slate-400 text-opacity-80 font-bold flex-col group-hover:block">
                  BECOME
                </p>
                <p className=" text-white font-bold flex-col group-hover:block">
                  DOCTOR
                </p>
              </div>
            </div>
            <Link
              to="/#"
              onMouseEnter={() => {
                setNeon("grayscale-0");
              }}
              onMouseLeave={() => {
                setNeon("grayscale");
              }}
              className=" group flex items-center justify-around py-2 w-60 rounded-full cursor-pointer group-hover:brightness-125 border-white border-2 hover:bg-white hover:shadow-[0px_0px_50px] hover:shadow-white "
            >
              <FaPlayCircle className="text-4xl group-hover:text-black  " />
              <button className="text-white font-Poppins font-bold text-xl  group-hover:text-black   ">
                START NOW
              </button>
            </Link>
            <div className="group flex justify-center items-end max-xl:w-[200px] xl:w-[250px] 2xl:w-[290px]  text-center    ">
              <img
                src={farmer}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-110" : ""
                } ${
                  neon == "grayscale-0"
                    ? " shadow-[0px_0px_20px] shadow-white"
                    : ""
                }`}
              />
              <div className="absolute group-hover:-translate-y-2 duration-700 mb-4  group-hover:scale-100 hidden group-hover:block   ">
                <p className=" text-slate-400 text-opacity-80 font-bold flex-col group-hover:block">
                  BECOME
                </p>
                <p className=" text-white font-bold flex-col group-hover:block">
                  FARMER
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="group flex justify-center items-end max-xl:w-[200px] xl:w-[250px] 2xl:w-[290px]  mt-10 text-center   ">
              <img
                src={governor}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-110" : ""
                } ${
                  neon == "grayscale-0"
                    ? " shadow-[0px_0px_20px] shadow-white"
                    : ""
                }`}
              />
              <div className="absolute group-hover:-translate-y-2 duration-700 mb-4  group-hover:scale-100 hidden group-hover:block  ">
                <p className=" text-slate-400 text-opacity-80 font-bold flex-col group-hover:block">
                  BECOME
                </p>
                <p className=" text-white font-bold flex-col group-hover:block">
                  GOVERNOR
                </p>
              </div>
            </div>
            <div className="group flex justify-center items-end max-xl:w-[200px] xl:w-[250px] 2xl:w-[290px]  mt-10 text-center   ">
              <img
                src={warden}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-110" : ""
                } ${
                  neon == "grayscale-0"
                    ? " shadow-[0px_0px_20px] shadow-white"
                    : ""
                }`}
              />
              <div className="absolute group-hover:-translate-y-2 duration-700 mb-4  group-hover:scale-100 hidden group-hover:block  ">
                <p className=" text-slate-400 text-opacity-80 font-bold flex-col group-hover:block">
                  BECOME
                </p>
                <p className=" text-white font-bold flex-col group-hover:block">
                  WARDEN
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
