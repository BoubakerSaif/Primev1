import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import white from "../../assets/images/white.png";
import { useDispatch, useSelector } from "react-redux";

const Step3 = ({ setStep, myBetaApp }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="text-white flex items-start justify-around h-[400px] w-[700px] max-xl:w-[600px] mt-12 ">
      {userInfo?.BetaStatus == "noApp" && (
        <>
          <img src={white} className="w-36  " />
          <div className="flex flex-col items-center  h-32 w-96 justify-around gap-3 ">
            <h1 className="font-bold text-2xl">
              Welcome to our Closed Beta Application, hit the start button if
              you're ready
            </h1>

            <div className="flex gap-8 font-semibold">
              <button
                onClick={() => {
                  setStep("step4");
                }}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[#1d1d1d] hover:text-white"
              >
                Start the App
              </button>
              <Link
                to={"/"}
                className=" px-6 py-2 rounded-lg border-[1px] border-[#3d3d3d] hover:bg-[#1d1d1d] "
              >
                Do it later
              </Link>
            </div>
          </div>
        </>
      )}
      {/* {userInfo?.whiteListStatus == "Pending" && (
        <div className="text-white font-bold text-lg mt-14  ">
          Your Whitelist App is under treatment process.
        </div>
      )} */}
      {myBetaApp[0]?.status == "Pending" && (
        <>
          <img src={white} className="w-36  " />
          <div className="text-white font-bold text-lg mt-14  ">
            Your ClosedBeta Application is under treatment process.
          </div>
        </>
      )}
      {myBetaApp[0]?.status == "Accepted" && (
        <>
          <img src={white} className="w-36  " />
          <div className="text-white font-bold text-lg mt-14  ">
            Your ClosedBeta Application is Accepted.
          </div>
        </>
      )}
      {myBetaApp[0]?.status == "Rejected" && (
        <>
          <img src={white} className="w-36  " />
          <div className="text-white font-bold text-lg mt-14  ">
            Your ClosedBeta Application is Rejected.
          </div>
        </>
      )}
    </div>
  );
};

export default Step3;
