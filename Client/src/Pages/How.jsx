import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiFivem } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";
import { FaQuestion } from "react-icons/fa";
import gta5 from "../assets/images/gta5.png";
import fivem from "../assets/images/fivemlogo.png";
import white from "../assets/images/white.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const How = () => {
  const [step, setStep] = useState("step1");
  const [cat, setCat] = useState("");
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <main className="  bg-[#010101] flex items-center text-white font-Poppins flex-col gap-12   ">
        <div className="flex h-fit gap-16 mt-10">
          <div
            onClick={() => {
              setStep("step1");
              setCat("");
            }}
            className="flex flex-col items-center gap-3 hover:cursor-pointer   "
          >
            <IoGameControllerOutline
              className={`bg-[#131313]text-white text-4xl p-2 rounded-xl ${
                step == "step1" ? "bg-[#e81c5a] " : ""
              } `}
            />
            <p className="text-sm font-semibold">Step 1</p>
          </div>
          <div
            onClick={() => {
              setStep("step2");
              setCat("");
            }}
            className="flex flex-col items-center gap-3 hover:cursor-pointer   "
          >
            <SiFivem
              className={`bg-[#131313]text-white text-4xl p-2 rounded-xl ${
                step == "step2" ? "bg-[#e81c5a] " : ""
              } `}
            />
            <p className="text-sm font-semibold">Step 2</p>
          </div>
          <div
            onClick={() => {
              setStep("step3");
              setCat("");
            }}
            className="flex flex-col items-center gap-3 hover:cursor-pointer   "
          >
            <FaQuestion
              className={`bg-[#131313]text-white text-4xl p-2 rounded-xl ${
                step == "step3" ? "bg-[#e81c5a] " : ""
              } `}
            />
            <p className="text-sm font-semibold">Step 3</p>
          </div>
          {cat == "cat1" && (
            <div
              onClick={() => {
                setStep("step4");
              }}
              className="flex flex-col items-center gap-3 hover:cursor-pointer   "
            >
              <SlNotebook
                className={`bg-[#131313]text-white text-4xl p-2 rounded-xl ${
                  step == "step4" ? "bg-[#e81c5a] " : ""
                } `}
              />
              <p className="text-sm font-semibold">Step 4</p>
            </div>
          )}
        </div>

        {step == "step1" && (
          <div className="text-white flex items-start justify-around h-[400px]  w-[700px] mt-12  ">
            <img src={gta5} className="w-60 " />
            <div className="flex flex-col items-center  h-32 w-96 justify-around ">
              <h1 className="font-bold text-2xl">Have you bought GTA V?</h1>
              <div className="flex gap-8 font-semibold">
                <button
                  onClick={() => {
                    setStep("step2");
                  }}
                  className="bg-[#e81c5a] px-4 py-2 rounded-lg hover:bg-[#1d1d1d]"
                >
                  Yeah, I bought it
                </button>
                <Link
                  target="_blank"
                  to={
                    "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
                  }
                  className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
                >
                  No,Buy it
                </Link>
              </div>
            </div>
          </div>
        )}
        {step == "step2" && (
          <div className="text-white flex items-start justify-around h-[400px] w-[700px] mt-12 ">
            <img src={fivem} className="w-60 " />
            <div className="flex flex-col items-center  h-32 w-96 justify-around ">
              <h1 className="font-bold text-2xl">Have you installed FiveM ?</h1>
              <div className="flex gap-8 font-semibold">
                <button
                  onClick={() => {
                    setStep("step3");
                  }}
                  className="bg-[#e81c5a] px-4 py-2 rounded-lg hover:bg-[#1d1d1d]"
                >
                  Yeah, I installed it
                </button>
                <Link
                  target="_blank"
                  to={"https://fivem.net/"}
                  className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
                >
                  No,download it
                </Link>
              </div>
            </div>
          </div>
        )}

        {step == "step3" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <div className="text-white flex items-start justify-around h-[400px] w-[700px] mt-12 ">
            <img src={white} className="w-36  " />
            <div className="flex flex-col items-center  h-32 w-96 justify-around gap-3 ">
              <h1 className="font-bold text-2xl">
                The WhiteListApp is composed of 5 categories of questions
              </h1>
              <div className="flex gap-8 font-semibold">
                <button
                  onClick={() => {
                    setStep("step4");
                    setCat("cat1");
                  }}
                  className="bg-[#e81c5a] px-4 py-2 rounded-lg hover:bg-[#1d1d1d]"
                >
                  Start the App
                </button>
                <Link
                  target="_blank"
                  to={"/"}
                  className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
                >
                  Do it later
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {step == "step3" &&
        userInfo?.guilds?.filter((el) => el.id !== "1273036528196653077")
          .length == 0
          ? "You need to join our discord first"
          : ""}

        {step == "step4" &&
        cat == "cat1" &&
        userInfo?.guilds?.filter((el) => el.id == "1273036528196653077")
          .length == 1 ? (
          <div className=" h-screen w-[900px] ">
            <h1 className="text-center text-2xl font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
              First Category : General Info
            </h1>
            <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
              <div className="flex flex-col gap-2 ">
                <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
                  Name
                </label>
                <input
                  className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-lg  "
                  type="text"
                  placeholder="   What is your real name or online alias"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
                  Discord ID
                </label>
                <input
                  className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-lg"
                  type="text"
                  placeholder="   e.g., username#1234"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
                  Age
                </label>
                <input
                  className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-lg"
                  type="text"
                  placeholder="   Must be 18+ to apply"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
                  Timezone
                </label>
                <input
                  className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-lg"
                  type="text"
                  placeholder="   What is your timezone? "
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
                  How Did You Hear About Us?
                </label>
                <input
                  className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-lg"
                  type="text"
                  placeholder="   How did you find out about our server?"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
                  Previous Roleplay Experience:
                </label>
                <textarea
                  className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-80 "
                  placeholder="   Briefly describe your previous experience in roleplay servers or communities"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <div className=" w-fit flex gap-2">
                  <button className="text-center  font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
                    Next
                  </button>
                  <button
                    onClick={() => {
                      setCat("");
                      setStep("step3");
                    }}
                    className="text-center  font-Poppins font-semibold bg-white text-[#010101] w-fit mx-auto px-4 py-1 rounded-md  hover:cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default How;
