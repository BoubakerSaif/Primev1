import React from "react";
import warden from "../assets/images/Government/warden.png";
import ems from "../assets/images/Government/ems.png";
import keepers from "../assets/images/Government/keepers.png";
import ranger from "../assets/images/Government/ranger.png";
import az1 from "../assets/images/Business/az.png";
import az2 from "../assets/images/Business/az_1.png";
import az3 from "../assets/images/Business/az_2.png";
import az4 from "../assets/images/Business/az_3.png";
import job1 from "../assets/images/Jobs/job_1.png";
import job2 from "../assets/images/Jobs/job_2.png";
const Jobs = () => {
  return (
    <div className=" w-full 2xl:h-screen bg-[#010101] text-white  flex flex-col items-center justify-around text-center max-2xl:gap-20    ">
      <div className=" w-full font-Poppins  font-bold max-2xl:mt-24">
        <p className="text-gray-500 uppercase  text-2xl">
          what we give players
        </p>
        <p className="text-5xl">
          Our world of <span className="text-white">factions,</span>
        </p>
        <p className="text-5xl text-white">businesses and jobs</p>
      </div>
      <div className="flex justify-center gap-20 items-center  font-Poppins  max-2xl:flex-wrap  ">
        <div className=" bg-[#131313] h-[700px] w-[400px] flex flex-col justify-between rounded-xl p-5 border-double border-4 border-white  ">
          <div className="flex flex-col items-center justify-around h-[100px]  ">
            <p className="font-bold text-2xl"> Government and Legal Factions</p>
            <p className="text-md">
              Check out our wide variety and new concept for the legal podium
            </p>
          </div>

          <div className="h-[120px] justify-between flex items-center group hover:cursor-pointer     ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-2 rounded-md font-semibold">
                Become Warden
              </span>
              <span className="font-medium ">Warden Branch</span>
            </p>
            <img src={warden} className="w-28   " />
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer    ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-2 rounded-md font-semibold">
                Become EMS & RDT
              </span>
              <span className="font-medium ">Scientist federation</span>
            </p>
            <img src={ems} className="w-28   " />
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer    ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-2 rounded-md font-semibold">
                Become Ranger
              </span>
              <span className="font-medium ">Ranger Legion</span>
            </p>
            <img src={ranger} className="w-28  " />
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer     ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-2 rounded-md font-semibold">
                Become Keeper
              </span>
              <span className="font-medium ">Wall Keepers Correction</span>
            </p>
            <img src={keepers} className="w-28  " />
          </div>
        </div>
        <div className=" bg-[#131313] h-[700px] w-[400px] flex flex-col justify-between rounded-xl p-5 border-double border-4 border-white  ">
          <div className="flex flex-col items-center justify-around h-[100px]  ">
            <p className="font-medium text-2xl"> Businesses</p>
            <p className="text-md">
              Dive into dozens of active and new businesses, strive in a high
              competitive atmoshpere
            </p>
          </div>

          <div className="h-[120px] justify-between flex items-center    group hover:cursor-pointer    ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-4 rounded-md font-semibold">
                Tabac
              </span>
              <span className="font-medium ">Explore the world of TABAC </span>
            </p>
            <img src={az1} className="w-36 " />
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white  w-fit py-1 px-4 rounded-md font-semibold">
                Logistics
              </span>
              <span className="font-medium ">
                Different trucking and logistics businesses
              </span>
            </p>
            <img src={az2} className="w-32 " />
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-4 rounded-md font-semibold">
                Miner
              </span>
              <span className="font-medium ">
                Mine for stone, gold and more{" "}
              </span>
            </p>
            <img src={az3} className="w-36 " />
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-4 rounded-md font-semibold">
                Engineer
              </span>
              <span className="font-medium ">
                Become an expert in electronics
              </span>
            </p>
            <img src={az4} className="w-36 " />
          </div>
        </div>
        <div className=" bg-[#131313] h-[700px] w-[400px] flex flex-col  gap-5 rounded-xl p-5 border-double border-4 border-white  ">
          <div className="flex flex-col items-center justify-around h-[100px]  ">
            <p className="font-medium text-2xl"> Jobs</p>
            <p className="text-md">Easy job, Easy money</p>
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-3 rounded-md font-semibold">
                Electricity
              </span>
              <span className="font-medium ">Fix or steal its up to you</span>
            </p>
            <img src={job1} className="w-40 " />
          </div>
          <div className="h-[120px] justify-between flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-white text-black duration-200 group-hover:bg-black  group-hover:text-white w-fit py-1 px-3 rounded-md font-semibold">
                Pool Cleaner
              </span>
              <span className="font-medium ">
                Clean pools using our tremendous new animations
              </span>
            </p>
            <img src={job2} className="w-40 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
