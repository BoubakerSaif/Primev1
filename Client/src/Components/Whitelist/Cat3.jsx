import React from "react";

const Cat3 = ({ setCat, setStep }) => {
  return (
    <div className=" h-auto w-[900px] ">
      <h1 className="text-center text-2xl font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer">
        Third Category : RP Knowledge Base 2
      </h1>
      <form className="flex flex-col h-full gap-6 font-Poppins mt-3   ">
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer ">
            Scenario 1: Encounter with a Stranger
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Your character encounters another person who seems to know more about the city but is unwilling to share information. Convince him to share information ( based on what you have as a new / linked to your socio-economical status )"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Scenario 2: Resource Scarcity
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Food and water are scarce in the city. How does your character plan to survive? Do they form alliances, go solo, barter, or steal? "
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Scenario 3: Confrontation with Authority
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Your character is confronted by a group claiming to be the city’s authority. They demand obedience without explanation. How does your character respond?"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Scenario 4: Discovering a Secret
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Your character stumbles upon a hidden passage that might lead outside the city. What do they do next?"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold hover:text-black hover:bg-white hover:cursor-pointer">
            Scenario 5: Forge your destiny
          </label>
          <textarea
            className="bg-[#010101] px-2 py-1 border-[#3d3d3d] border-[1px] rounded-md h-44 text-sm"
            type="text"
            placeholder="Based on your character perks, when does your character die?"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <div className=" w-fit flex gap-2">
            <button
              onClick={() => {
                setCat("cat4");
                setStep("step5");
                window.scrollTo(0, 0);
              }}
              className="text-center  font-Poppins font-semibold bg-[#e81c5a] w-fit mx-auto px-4 py-1 rounded-md  hover:text-black hover:bg-white hover:cursor-pointer"
            >
              Next
            </button>
            <button
              onClick={() => {
                setCat("cat2");
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

export default Cat3;
