import React from "react";

export const Cat4 = ({ setCat, setStep }) => {
  return (
    <div className=" h-auto w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
        Fourth Category : RP Knowledge Base 3
      </h1>
      <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Character’s Long-Term Goals
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="What are your character’s long-term goals in the city?"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Potential Character Development
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="How do you see your character evolving after 3 months of roleplay"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Exit Strategy
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="If your character were to leave the city or die, how would you roleplay their exit? (Assesses commitment to the roleplay and creative handling of character endings)"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setCat("cat5");
                setStep("step5");
                window.scrollTo(0, 0);
              }}
              className="text-center  font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer"
            >
              Next
            </button>
            <button
              onClick={() => {
                setCat("cat3");
                setStep("step5");
                window.scrollTo(0, 0);
              }}
              className="text-center  font-Poppins font-semibold bg-white text-[#010101] w-fit mx-auto px-4 py-1 rounded-md  hover:cursor-pointer"
            >
              Go back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
