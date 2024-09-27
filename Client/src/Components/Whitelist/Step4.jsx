import React from "react";
import white from "../../assets/images/white.png";
import { Link } from "react-router-dom";

const Step4 = ({ setStep, setCat }) => {
  return (
    <div className="text-white flex items-start justify-around h-[400px] w-[700px] mt-12 ">
      <img src={white} className="w-36  " />
      <div className="flex flex-col items-center  h-32 w-96 justify-around gap-3 ">
        <h1 className="font-bold text-2xl">
          The WhiteListApp is composed of 5 categories of questions
        </h1>
        <div className="flex gap-8 font-semibold">
          <button
            onClick={() => {
              setCat("cat1");
              setStep("step5");
            }}
            className="bg-[#e81c5a] px-4 py-2 rounded-lg hover:bg-[#1d1d1d]"
          >
            Start the App
          </button>
          <Link
            to={"/"}
            className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
          >
            Do it later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step4;
