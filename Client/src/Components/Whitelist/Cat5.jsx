import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import npc from "../../assets/images/npc.png";
import warden from "../../assets/images/4.png";
import criminal from "../../assets/images/criminal.png";

const Cat5 = ({ setCat, setStep, cat }) => {
  const animations = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
  };
  const epicaudio = new Audio(
    "https://res.cloudinary.com/dl6o7cgmp/video/upload/v1727536985/kick_oo8op3.mp3"
  );
  const textAudio = new Audio(
    "https://res.cloudinary.com/dl6o7cgmp/video/upload/v1727535172/welcom2_hi5xsd.wav"
  );
  const [choice, setChoice] = useState("nothing");
  useEffect(() => {
    if (cat == "cat5") {
      epicaudio.play();
      setTimeout(() => {
        textAudio.play();
      }, 5000);
    }
  }, [choice]);
  useEffect(() => {
    setTimeout(() => {
      epicaudio.play();
    }, 24000);
  }, [choice]);

  return (
    <div className="w-full">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 5 }}
        className=" h-auto   "
      >
        <h1 className="text-center text-2xl font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
          Fifth Category : Forge Your Path
        </h1>
        {choice == "nothing" && (
          <>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut" }}
              src={npc}
              className=" w-96 h-96 max-xl:mt-8 border-[#3d3d3d] border-double border-[5px] rounded-md mx-auto mt-7"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, ease: "easeInOut" }}
              className="text-white h-[350px] w-[600px] mx-auto max-xl:flex-col  font-Poppins  text-center    "
            >
              <p className="mt-3 leading-loose ">
                Welcome to our city newcomer. You must be wondering where you
                are.
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 9 }}
                  className="block"
                >
                  This place has its own rules... strict rules. You have two
                  paths ahead of you:
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 15 }}
                >
                  obey the law and find your place in society, or break the law
                  and seek your fortune in the shadows.
                </motion.span>
                <motion.span
                  className="block mt-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 22 }}
                >
                  What will you choose?
                </motion.span>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 24 }}
                  className="mx-auto mt-2 flex justify-center gap-8  "
                >
                  <button
                    onClick={() => {
                      setChoice("obey");
                    }}
                    className="bg-[#e81c5a] px-4 py-1 rounded-md  hover:shadow-[#e81c5a] hover:shadow-[0px_0px_30px] "
                  >
                    Obey The Law
                  </button>
                  <button
                    onClick={() => {
                      setChoice("break");
                    }}
                    className="bg-[#e81c5a] px-4 py-1 rounded-md  hover:shadow-[#e81c5a] hover:shadow-[0px_0px_30px] "
                  >
                    Break The Law
                  </button>
                </motion.div>
              </p>
            </motion.div>
          </>
        )}

        {choice == "obey" && (
          <div className="text-white h-[400px] flex justify-center gap-28 mt-6 w-auto font-Poppins text-center ">
            <div className=" w-[700px] mt-7 flex flex-col gap-6">
              <h1 className="text-start px-4">
                I want to build a legitimate life here. I’ll follow the rules
              </h1>
              <form>
                <div className="flex flex-col gap-2 ">
                  <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
                    A star in the dust
                  </label>
                  <textarea
                    className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-60 "
                    type="text"
                    placeholder="What is the most creative scene you can imagine involving buying a company?"
                  ></textarea>
                </div>
              </form>
              <div className=" flex justify-end gap-5 ">
                <button className="text-center font-Poppins font-semibold bg-[#e81c5a] w-fit  px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
                  Next
                </button>
                <button
                  onClick={() => {
                    setChoice("nothing");
                  }}
                  className="text-center font-Poppins font-semibold bg-white text-[#010101] w-fit  px-4 py-1 rounded-md hover:cursor-pointer"
                >
                  Go back
                </button>
              </div>
            </div>
            <div>
              <img
                src={warden}
                className=" w-96 h-96 max-xl:mt-8 border-[#3d3d3d] border-double border-[5px] rounded-md mx-auto mt-7"
              />
            </div>
          </div>
        )}
        {choice == "break" && (
          <div className="text-white h-[400px] flex justify-center gap-28 mt-6 w-auto font-Poppins text-center ">
            <div className=" w-[700px] mt-7 flex flex-col gap-6">
              <h1 className="text-start px-4">
                I don’t trust this place. I’ll make my own rules.
              </h1>
              <form>
                <div className="flex flex-col gap-2 ">
                  <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
                    A star in the dust
                  </label>
                  <textarea
                    className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-60 "
                    type="text"
                    placeholder="What is the most creative scene you can imagine involving buying a company?"
                  ></textarea>
                </div>
              </form>
              <div className=" flex justify-end gap-5 ">
                <button className="text-center font-Poppins font-semibold bg-[#e81c5a] w-fit  px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
                  Next
                </button>
                <button
                  onClick={() => {
                    setChoice("nothing");
                  }}
                  className="text-center font-Poppins font-semibold bg-white text-[#010101] w-fit  px-4 py-1 rounded-md hover:cursor-pointer"
                >
                  Go back
                </button>
              </div>
            </div>
            <div>
              <img
                src={criminal}
                className=" w-96 h-96 max-xl:mt-8 border-[#3d3d3d] border-double border-[5px] rounded-md mx-auto mt-7"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cat5;
