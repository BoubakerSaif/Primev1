import React from "react";

const Cat1 = ({ setCat, setStep, whiteList, setWhiteList }) => {
  const onChangeHandler = (e) => {
    setWhiteList({ ...whiteList, [e.target.name]: e.target.value });
  };
  return (
    <div className=" max-lg:w-[640px]  w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
        First Category : General Info
      </h1>
      <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Name
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2   "
            type="text"
            placeholder="What is your real name or online alias"
            name="name"
            value={whiteList.name}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Discord ID
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="e.g., username#1234"
            name="discordId"
            value={whiteList.discordId}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Age
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="Must be 18+ to apply"
            name="age"
            value={whiteList.age}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Timezone
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="What is your timezone? "
            name="timezone"
            value={whiteList.timezone}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            How Did You Hear About Us?
          </label>
          <input
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-9 text-sm max-lg:w-[640px] px-2 "
            type="text"
            placeholder="How did you find out about our server ?"
            name="hearAboutUs"
            value={whiteList.hearAboutUs}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Previous Roleplay Experience:
          </label>
          <textarea
            onChange={onChangeHandler}
            className="bg-[#010101] border-[#3d3d3d] border-[1px] rounded-md h-80 max-lg:w-[640px] px-2  "
            placeholder="Briefly describe your previous experience in roleplay servers or communities"
            name="prevRpExp"
            value={whiteList.prevRpExp}
          ></textarea>
        </div>
        <div className="flex justify-end max-lg:w-[600px] ">
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
