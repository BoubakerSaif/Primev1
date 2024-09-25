import React from "react";
import Navbar from "../Components/Navbar";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiFivem } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";
const How = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen bg-[#010101] flex justify-center text-white font-Poppins ">
        <div className="flex h-fit  gap-28 mt-10 ">
          <div className="flex flex-col items-center gap-3 hover:cursor-pointer   ">
            <IoGameControllerOutline className="bg-[#131313]  text-white text-4xl p-1 rounded-full hover:bg-pink-700    " />
            <p className="text-sm font-semibold">Step 1</p>
          </div>
          <div className="flex flex-col items-center gap-3  ">
            <SiFivem className="bg-[#131313]  text-white text-4xl p-1 rounded-full" />
            <p className="text-sm font-semibold">Step 2</p>
          </div>
          <div className="flex flex-col items-center gap-3  ">
            <SlNotebook className="bg-[#131313]  text-white text-4xl p-1 rounded-full" />
            <p className="text-sm font-semibold">Step 3</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default How;
