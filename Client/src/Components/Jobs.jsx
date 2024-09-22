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
          Our world of <span className="text-pink-600">factions,</span>
        </p>
        <p className="text-5xl text-pink-600">businesses and jobs</p>
      </div>
      <div className="flex justify-center gap-20 items-center  font-Poppins  max-2xl:flex-wrap  ">
        <div className=" bg-[#131313] h-[700px] w-[400px] flex flex-col justify-between rounded-xl p-5 border-double border-4 border-pink-600  ">
          <div className="flex flex-col items-center justify-around h-[100px]  ">
            <p className="font-bold text-2xl"> Government & LEO Factions</p>
            <p className="text-md">
              Check out our wide variety of government & LEO factions
            </p>
          </div>

          <div className="h-[120px] flex items-center  group hover:cursor-pointer     ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME COP
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Los Santos Police Department
              </span>
            </p>
            <img src={warden} className="w-28   " />
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer    ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME EMS & RDT
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Emergency Medical Services
              </span>
            </p>
            <img src={ems} className="w-28   " />
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer    ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME RANGER
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Los Santos Police Department
              </span>
            </p>
            <img src={ranger} className="w-28  " />
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer     ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME KEEPER
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Los Santos Police Department
              </span>
            </p>
            <img src={keepers} className="w-28  " />
          </div>
        </div>
        <div className=" bg-[#131313] h-[700px] w-[400px] flex flex-col justify-between rounded-xl p-5 border-double border-4 border-pink-600  ">
          <div className="flex flex-col items-center justify-around h-[100px]  ">
            <p className="font-bold text-2xl"> Businesses</p>
            <p className="text-md">
              Browse dozens of active businesses and engage in high quality role
              play!
            </p>
          </div>

          <div className="h-[120px] flex items-center  group hover:cursor-pointer    ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME COP
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Los Santos Police Department
              </span>
            </p>
            <img src={az1} className="w-28 " />
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600  w-fit py-1 px-2 rounded-md font-semibold">
                BECOME EMS & RDT
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Emergency Medical Services
              </span>
            </p>
            <img src={az2} className="w-28 " />
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME RANGER
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Los Santos Police Department
              </span>
            </p>
            <img src={az3} className="w-28 " />
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME KEEPER
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Los Santos Police Department
              </span>
            </p>
            <img src={az4} className="w-28 " />
          </div>
        </div>
        <div className=" bg-[#131313] h-[700px] w-[400px] flex flex-col gap-5 rounded-xl p-5 border-double border-4 border-pink-600  ">
          <div className="flex flex-col items-center justify-around h-[100px]  ">
            <p className="font-bold text-2xl"> Jobs</p>
            <p className="text-md">
              Explore many of the available jobs to start with!
            </p>
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME COP
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Los Santos Police Department
              </span>
            </p>
            <img src={job1} className="w-28 " />
          </div>
          <div className="h-[120px] flex items-center  group hover:cursor-pointer   ">
            <p className="flex flex-col text-start gap-2  ">
              <span className="bg-pink-600 duration-200 group-hover:bg-white  group-hover:text-pink-600 w-fit py-1 px-2 rounded-md font-semibold">
                BECOME EMS & RDT
              </span>
              <span className="font-bold group-hover:text-pink-600">
                Emergency Medical Services
              </span>
            </p>
            <img src={job2} className="w-28 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
