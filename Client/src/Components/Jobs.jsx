import React from "react";
import { motion } from "framer-motion";
const Jobs = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-evenly   bg-[#010101] text-white text-center font-bold ">
      <motion.div
        className="font-Poppins font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      >
        <p className="font-bold text-4xl max-lg:text-2xl "> JOBS</p>
        <p className="text-2xl mt-1 max-lg:text-xl">Easy job, Easy money</p>
      </motion.div>
      <motion.div
        className="flex  justify-center gap-24 text-lg  w-[1000px] flex-wrap max-2xl:w-auto   "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="group hover:cursor-pointer flex flex-col items-center   ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247216/logistic_ps3lea.png"
            className="w-64 max-lg:w-40"
          />

          <p>Logistics</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247217/cleaning_jgnpae.png"
            className="w-64 max-lg:w-40"
          />

          <p>Cleaning</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247217/fishing_tj8uno.png"
            className="w-64 max-lg:w-40"
          />

          <p>Fishing </p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247215/Electric_hdmygu.png"
            className="w-64 max-lg:w-40"
          />

          <p> Electricity</p>
        </div>
        <div className="group hover:cursor-pointer flex flex-col items-center  ">
          <img
            src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247217/miner_jdimtb.png"
            className="w-64 max-lg:w-40"
          />

          <p>Miner</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Jobs;
