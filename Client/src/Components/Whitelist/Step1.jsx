import React from "react";
import gta5 from "../../assets/images/gta5.png";
import { Link } from "react-router-dom";

const Step1 = ({ setStep }) => {
  return (
    <div className="text-white flex items-start justify-around h-[400px]  w-[700px] max-xl:w-[600px] mt-12  ">
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
            to={"https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"}
            className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
          >
            No,Buy it
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step1;