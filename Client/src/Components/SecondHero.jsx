import React from "react";
import crim from "../assets/images/crim.png";
import ward from "../assets/images/ward.png";
import los from "../assets/images/los.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SecondHero = () => {
  const [first, setFirst] = useState("grayscale");
  const [second, setSecond] = useState("grayscale");
  return (
    <div className="relative ">
      <img
        src={los}
        className={`bg-cover h-[550px] max-xl:h-[490px] w-full grayscale brightness-50 `}
      />

      <div className="absolute top-20 max-xl:top-8  max-h-[400px] flex w-full justify-around items-center mix-blend-screen  ">
        <div className="text-white max-xl:ml-5">
          <img
            src={ward}
            className={`h-[370px] max-xl:h-[220px] max-xl:w-80 grayscale max-xl:-scale-x-90   rounded-full  ${first} ${
              first == "grayscale" ? "brightness-75 " : "brightness-125"
            } `}
          />
        </div>
        <div className="text-white flex flex-col items-center h-[500px] gap-28 max-xl:gap-5 max-xl:justify-around w-[650px]  ">
          <p className="max-xl:hidden">
            <span className="text-pink-600 font-bold [text-shadow:0px_0px_60px] shadow-pink-600 font-Poppins ">
              {`${"Prime RP "}`}
            </span>
            is a unique opportunity to immerse yourself in a virtual universe
            and play the chosen role, following rules similar to real life.
            Become a politician, gangster, businessman, cab driver, factory
            worker, policeman or any other role. We have no limits, you are free
            to choose your path and create your own story in this virtual world!
          </p>
          <h2 className=" font-Poppins underline decoration-pink-600 decoration-4 underline-offset-8 max-xl:hidden ">
            Will you try it ?
          </h2>
          <p className="xl:hidden text-[12px]  max-xl:w-60 lg:w-96 ">
            <span className="text-pink-600 font-bold [text-shadow:0px_0px_60px] shadow-pink-600 font-Poppins ">
              {`${"Prime RP "}`}
            </span>
            is a virtual universe with a variety of roles similar to real life.
            You can become anyone you want, creating your own story in this
            world with other players.
          </p>
          <div className="flex justify-around w-full items-center max-xl:flex-col max-xl:gap-5 gap-10 text-center ">
            <Link
              onMouseEnter={() => {
                setFirst("grayscale-0");
              }}
              onMouseLeave={() => {
                setFirst("grayscale");
              }}
              className=" py-2 px-3 max-xl:w-64 w-80  border-pink-600 border-[1px] rounded-md hover:bg-pink-700 hover:shadow-pink-700 hover:shadow-[0px_0px_30px] hover:brightness-125 duration-500 "
            >
              <button>
                <span className="font-extrabold text-pink-700">{`${"<"}`}</span>
                {`${"The path of a lawman "} `}
              </button>
            </Link>
            <Link
              onMouseEnter={() => {
                setSecond("grayscale-0");
              }}
              onMouseLeave={() => {
                setSecond("grayscale");
              }}
              className=" py-2 px-3 max-xl:w-64 w-80  border-pink-600 border-[1px] rounded-md hover:bg-pink-700 hover:shadow-pink-700 hover:shadow-[0px_0px_30px] hover:brightness-125 duration-500 "
            >
              <button>
                {`${"The way of the slum gangster"}`}
                <span className="font-extrabold text-pink-700">{`${" >"}`}</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="text-white max-xl:mr-5  ">
          <img
            src={crim}
            className={`h-[370px] grayscale rounded-full max-xl:h-[220px] max-xl:w-80 max-xl:-scale-x-90  ${second} ${
              second == "grayscale" ? "brightness-75 " : "brightness-125"
            } `}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
