import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainHero_5 = () => {
  return (
    <div className=" bg-[#010101] text-center flex items-start justify-center  relative h-[500px]  ">
      <motion.div
        className="flex items-center  absolute top-[-130%] right-[3%] max-lg:right-[0]  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div>
          <p className=" text-slate-400 text-3xl  text-opacity-80  font-bold flex-col ">
            BECOME
          </p>
          <p className=" text-white font-bold flex-col text-5xl max-lg:text-4xl ">
            BUSINESS WOMEN
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247131/c5_ipvev1.png"
          className="w-[600px] max-lg:w-96   "
        />
      </motion.div>
      <div className="flex flex-col mt-40 gap-20  ">
        <motion.p
          className="text-white text-4xl font-semibold "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          And there's a lot more than you would think....
        </motion.p>
        <motion.div
          className="w-fit mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Link
            to="/joinus"
            className="flex items-center justify-center gap-7 group py-1 px-3 rounded-full cursor-pointer group-hover:brightness-150 border-[#3d3d3d] border-2  hover:bg-white hover:shadow-[0px_0px_20px] hover:shadow-white "
          >
            <FaPlayCircle className="text-5xl  text-white sm:text-3xl group-hover:text-black  " />
            <button className="text-white font-Poppins font-bold text-xl  group-hover:text-black max-lg:text-sm    ">
              START YOUR JOURNEY
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MainHero_5;
