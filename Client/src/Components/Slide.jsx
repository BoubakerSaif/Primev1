import React, { useState } from "react";
import gtalogo from "../assets/images/gtalogo.png";
import fivemlogo from "../assets/images/fivemlogo.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMailOpenOutline } from "react-icons/io5";
const Slide = () => {
  const slides = [
    "https://gta5majestic.com/images/home/showcase/cards/your-way.webp",
    "https://gta5majestic.com/images/home/showcase/cards/lots-of-entertainment.webp",
    "https://gta5majestic.com/images/home/showcase/cards/cars-clothes-every-taste.webp",
  ];
  const texts = [
    {
      title: "Rule Your Way",
      text: "On this dynamic Prime RP, the choice is yours: lead a notorious gang or flip the script and join the force to become a defender of justice. Navigate the thin line between crime and law, where every decision can propel you into a life of underground dealings or into the ranks of the city's bravest. Will you rule the streets or protect them?",
    },
    {
      title: "Cars and clothes to suit all tastes",
      text: "Experience the thrill of endless customization in our GTA 5 server. Choose from a diverse fleet, ranging from sleek supercars to practical minivans. Personalize your character with a variety of clothing options, from trendy streetwear to exclusive luxury brands. Make a statement and stand out among players with your unique style!",
    },
    {
      title: "Thrills and Ventures",
      text: "Engage in a myriad of activities on the Prime RP. Rise to success by running your own trucking business or dive into the world of GTA to generate passive income. But it's not just about earning; it's about outsmarting competitors and controlling your turf. Keep an eye on rivals and manage your assets carefully to become a true tycoon in the game.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="  text-white h-screen 2xl:h-[600px] w-full bg-[#010101] flex justify-around items-center max-2xl:flex-col max-2xl:gap-24 max-xl:justify-between     ">
      <div className="relative    ">
        <img
          src={slides[currentIndex]}
          className="h-[400px] max-md:h-[250px] "
        />
        <p className="absolute top-[80%] max-md:top-[99%] font-Poppins font-semibold text-3xl max-md:text-xl  ">
          {texts[currentIndex].title}
        </p>
        <p className="absolute top-[92%] max-md:top-[290px] font-Poppins text-sm  ">
          {texts[currentIndex].text}
        </p>
        <div className="absolute top-[50%] w-fit left-1 rounded-full p-2 bg-black/20 text-white hover:text-white cursor-pointer hover:shadow-white hover:shadow-[0px_0px_30px] duration-300 ">
          <IoIosArrowBack
            size={40}
            onClick={prevSlide}
            className="duration-500"
          />
        </div>
        <div className="absolute top-[50%] right-1  w-fit rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-white  hover:shadow-white hover:shadow-[0px_0px_30px] duration-300">
          <IoIosArrowForward
            onClick={nextSlide}
            size={40}
            className="duration-500"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-around items-center h-[400px] w-[750px] max-md:w-[600px] 2xl:mt-24     ">
        <div>
          <p className="font-Poppins font-bold text-2xl max-md:text-xl ">
            How do I start playing?
          </p>
          <p className="font-Poppins max-md:text-sm ">
            Just two simple steps and you're ready to go!
          </p>
        </div>

        <div className="flex justify-between items-center w-[650px]  h-24 bg-[#131313] border-[1px] border-[#3d3d3d] rounded-md p-3 max-md:w-[500px] lg:mt-3   ">
          <img src={gtalogo} className="w-28" />
          <div className="font-Poppins text-sm">
            <p>Buy Grand Theft Auto V.</p>
            <p>If you do not already have a licensed version</p>
          </div>
          <Link
            target="_blank"
            to={"https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"}
            className="flex gap-2 items-center px-8 py-1 bg-white brightness-125 rounded-md  w-44 justify-center  "
          >
            <FaShoppingCart className="text-black" />
            <p className="text-black font-bold">Buy</p>
          </Link>
        </div>
        <div className="flex justify-between items-center w-[650px]  h-24 bg-[#131313] p-3 border-[1px] border-[#3d3d3d] rounded-md max-md:w-[500px]    ">
          <img src={fivemlogo} className="w-28 h-12" />
          <div className="font-Poppins text-sm">
            <p>Download FiveM Launcher</p>
            <p>Launcher will download necessary server files</p>
          </div>
          <Link
            to={"https://fivem.net/"}
            target="_blank"
            className="flex gap-2 items-center px-8 py-1 bg-white brightness-125 rounded-md w-44 justify-center "
          >
            <IoMdDownload className="text-black" />
            <p className="text-black font-bold">Download</p>
          </Link>
        </div>
        <p className=" text-slate-300 flex items-center gap-2 font-Poppins mb-9  ">
          Any questions or issues? Let us help you
          <span className="flex items-center justify-center gap-1 text-white brightness-200 underline decoration-white decoration-2 hover:cursor-pointer">
            <IoMailOpenOutline className="text-2xl text-white mb-1  " />
            Get in touch!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Slide;
