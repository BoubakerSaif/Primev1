import React from "react";

const Cat1 = ({ setCat, setStep }) => {
  return (
    <div className=" h-screen w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
        First Category : General Info
      </h1>
      <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Name
          </label>
          <input
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm  "
            type="text"
            placeholder="   What is your real name or online alias"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Discord ID
          </label>
          <input
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm"
            type="text"
            placeholder="   e.g., username#1234"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Age
          </label>
          <input
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm"
            type="text"
            placeholder="   Must be 18+ to apply"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Timezone
          </label>
          <input
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm"
            type="text"
            placeholder="   What is your timezone? "
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            How Did You Hear About Us?
          </label>
          <input
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm"
            type="text"
            placeholder="   How did you find out about our server?"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Previous Roleplay Experience:
          </label>
          <textarea
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-80 "
            placeholder="   Briefly describe your previous experience in roleplay servers or communities"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setCat("cat2");
                setStep("step5");
                window.scrollTo(0, 0);
              }}
              className="text-center  font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer"
            >
              Next
            </button>
            <button
              onClick={() => {
                setCat("");
                setStep("step3");
              }}
              className="text-center  font-Poppins font-semibold bg-white text-[#010101] w-fit mx-auto px-4 py-1 rounded-md  hover:cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cat1;
