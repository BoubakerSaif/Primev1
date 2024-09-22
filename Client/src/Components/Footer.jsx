import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#010101] h-[450px] max-xl:h-screen max-xl:flex-wrap lg:flex-nowrap lg:h-[450px]  text-white  flex justify-around items-center  ">
      <div className="h-[350px] w-[280px] flex flex-col mt-10 gap-8 font-Poppins  ">
        <p className="text-white font-Poppins text-2xl font-bold">
          <span className="text-pink-600 text-4xl">P</span>rime
        </p>
        <p className="text-gray-400">
          PRIME is not affiliated with or endorsed by Rockstar North, Take-Two
          Interactive or other rightsholders.
        </p>
        <p className="text-gray-400">
          Any trademarks used belong to their respective owners. PRIME reserves
          all rights on rightly owned images and other visual content provided
          on PRIME.
        </p>
      </div>
      <div className="h-[350px] w-[280px] flex flex-col gap-8 mt-16 font-Poppins  ">
        <p className="text-white font-Poppins text-xl font-bold underline decoration-4 decoration-pink-600 underline-offset-4">
          Link & Ressources
        </p>
        <Link className="text-gray-400 hover:translate-x-2 duration-300 w-fit">
          <p>Discord</p>
        </Link>
        <Link className="text-gray-400 hover:translate-x-2 duration-300 w-fit ">
          <p>Role Play Guide</p>
        </Link>
      </div>
      <div className="h-[350px] w-[280px] flex flex-col  gap-8 mt-16 font-Poppins  ">
        <p className="text-white font-Poppins text-xl font-bold underline decoration-4 decoration-pink-600 underline-offset-4">
          Need Help?
        </p>
        <Link>
          <p className="text-gray-400 hover:translate-x-2 duration-300 w-fit">
            Terms & Conditions
          </p>
        </Link>
        <Link>
          <p className="text-gray-400 hover:translate-x-2 duration-300 w-fit">
            Privacy Policy
          </p>
        </Link>
      </div>
      <div className="h-[350px] w-[280px] flex flex-col  gap-8 mt-16 font-Poppins  ">
        <p className="text-white font-Poppins text-xl font-bold underline decoration-4 decoration-pink-600 underline-offset-4">
          Follow us
        </p>
        <div className="flex gap-4 text-3xl">
          <Link className="w-fit">
            <FaTwitter className="text-cyan-500 hover:brightness-200 hover:scale-110 duration-200 " />
          </Link>
          <Link className="w-fit">
            <FaInstagramSquare className="text-red-600 hover:brightness-200 hover:scale-110 duration-200" />
          </Link>
          <Link className="w-fit">
            <FaYoutube className="text-red-700 hover:brightness-200 hover:scale-110 duration-200 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
