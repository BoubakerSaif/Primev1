import React from "react";
import { motion } from "framer-motion";
const MainHero_4 = () => {
  return (
    <div className=" bg-[#010101] text-center relative h-[650px]  border-red-600   ">
      <motion.div
        className="flex items-center  absolute top-[-75%] left-[5%]  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src="https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729247137/c3_z3zrwa.png"
          className="w-[600px]  "
        />
        <div>
          <p className=" text-slate-400 text-3xl  text-opacity-80  font-bold flex-col ">
            BECOME
          </p>
          <p className=" text-white font-bold flex-col text-5xl ">GOVERNOR</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MainHero_4;