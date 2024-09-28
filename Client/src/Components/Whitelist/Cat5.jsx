import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import npc from "../../assets/images/npc.png";
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

  useEffect(() => {
    if (cat == "cat5") {
      epicaudio.play();
      setTimeout(() => {
        textAudio.play();
      }, 5000);
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      epicaudio.play();
    }, 24000);
  }, []);

  const [choice, setChoice] = useState("nothing");

  return (
    <div>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 5 }}
        className="  h-screen  "
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
              className=" w-96 h-96 max-xl:mt-8 border-[#3d3d3d] border-double border-[5px] rounded-md mx-auto mt-7    "
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, ease: "easeInOut" }}
              className="text-white  h-[350px] w-[600px]   max-xl:flex-col  font-Poppins  text-center   "
            >
              <p className="  mx-auto    mt-3  leading-loose ">
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
          <div className="text-white border-2 ">Obey Div</div>
        )}
        {choice == "break" && <div className="text-white">Break Div</div>}
      </motion.div>
    </div>
  );
};

export default Cat5;
