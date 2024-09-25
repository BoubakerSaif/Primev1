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

const Hero = () => {
  const [neon, setNeon] = useState("grayscale");
  const [show, setShow] = useState(false);

  return (
    <div className=" text-white relative ">
      <img
        src={business}
        className={`w-full h-screen  grayscale brightness-50`}
      />
      <div className="absolute top-0 flex items-center justify-center w-full h-screen  ">
        <main className=" flex items-center justify-center gap-28 max-lg:gap-10 max-lg:flex-col         ">
          <div className="flex lg:flex-col items-center gap-16  ">
            <div className="group flex justify-center items-end w-[330px] max-xl:w-[250px] max-lg:w-[200px]  text-center   ">
              <img
                src={criminal}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-3 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-105" : ""
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
            <div className="group flex justify-center items-end w-[330px] max-xl:w-[250px] max-lg:w-[200px] text-center  ">
              <img
                src={bsman}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-105" : ""
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
          <div className="flex lg:flex-col items-center gap-16 ">
            <div className="group flex justify-center items-end w-[330px] max-xl:w-[250px] max-lg:w-[200px] text-center    ">
              <img
                src={doctor}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-105" : ""
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
              className=" group flex items-center justify-around py-2 w-60 max-lg:w-8 rounded-full cursor-pointer group-hover:brightness-125 border-white border-2 hover:bg-white hover:shadow-[0px_0px_50px] hover:shadow-white "
            >
              <FaPlayCircle className="text-4xl group-hover:text-black   " />
              <button className="text-white font-Poppins font-bold text-xl max-lg:hidden  group-hover:text-black   ">
                START NOW
              </button>
            </Link>
            <div className="group flex justify-center items-end w-[330px] max-xl:w-[250px] max-lg:w-[200px] text-center    ">
              <img
                src={farmer}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-105" : ""
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
          <div className="flex lg:flex-col items-center gap-16 ">
            <div className="group flex justify-center items-end  w-[330px] max-xl:w-[250px] max-lg:w-[200px] text-center   ">
              <img
                src={governor}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-105" : ""
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
            <div className="group flex justify-center items-end w-[330px] max-xl:w-[250px] max-lg:w-[200px] text-center   ">
              <img
                src={warden}
                className={` rounded-[80px] ${neon} group-hover:grayscale-0 group-hover:-translate-y-2 duration-700  group-hover:scale-100 cursor-pointer group-hover:brightness-125 ${
                  neon == "grayscale-0" ? "scale-105" : ""
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
    </div>
  );
};

export default Hero;
