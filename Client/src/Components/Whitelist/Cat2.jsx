import React from "react";

const Cat2 = ({ setCat, setStep }) => {
  return (
    <div className=" h-auto w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
        Second Category : RP Knowledge Base 1
      </h1>
      <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Character Name
          </label>
          <input
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm  "
            type="text"
            placeholder="What is your character's name"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character Ethnicity
          </label>
          <input
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm"
            type="text"
            placeholder="Be aware of the ethnicity acting other than what you need to be will result a character wipe and/or a ban"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character's Background and Status
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Describe your character’s current socio-economic status. Are they poor or wealthy? What factors have contributed to this status in the context of waking up in a caged city?"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Reason for Being in the City
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Given the server’s story of waking up in a caged city with a massive wall and closed gate, why does your character think they are here? "
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character’s Skills and Knowledge
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="What specific skills does your character possess? Are they educated, skilled in a trade, or do they have street smarts?How might these skills affect their survival or social standing in the city?"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Character's Initial Reactions
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm "
            placeholder="What is your character’s initial reaction upon waking up in this mysterious city? Are they fearful, curious, angry,or something else? (Helps understand their psychological profile)"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setCat("cat3");
                setStep("step5");
                window.scrollTo(0, 0);
              }}
              className="text-center  font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer"
            >
              Next
            </button>
            <button
              onClick={() => {
                setCat("cat1");
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

export default Cat2;
