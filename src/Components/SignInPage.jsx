import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaLongArrowAltUp } from "react-icons/fa";
import codeAntLogo from "../assets/Images/codeAntLogo.png";
import NameAndLogo from "../assets/Images/NameAndLogo.png";
import Favicon from "../assets/Images/Favicon.png";
import SignInImage from "../assets/Images/SignInImage.png";
function SignInPage() {
  var numbers = [
    { number: "30+", text: "Language Support" },
    { number: "10k+", text: "Develpers" },
    { number: "100k+", text: "Hours Saved" },
  ];
  return (
    <div className="h-screen w-full flex signInPage">
      <div className="leftSignIn relative h-full w-0 md:w-[50%]">
        <div className="codeAntlogo hidden md:block absolute left-0 bottom-0 md:w-52 lg:w-60">
          <img className="w-full" src={codeAntLogo} alt="" />
        </div>
        <div className="leftsidething relative h-full full">
          <div className="bothbox absolute w-fit top-[40%] flex items-center justify-center translate-y-[-50%] left-[56%] translate-x-[-50%]">
            <div className="centerbox hidden md:block rounded-3xl md:h-[15vw] lg:h-[10vw] md:w-80 lg:w-96 border-[0.1vw] border-[#dddff1]">
              <div className="uppertextbar h-[40%] border-b-[0.1vw] border-b-[#dddff1] w-full gap-2 items-center px-4 flex">
                <img
                  className="md:w-[5%] lg:w-[7%]"
                  src={Favicon}
                  alt=""
                />
                <h1 className="md:text-sm lg:text-lg font-[700]">
                  AI to Detect & Autofix Bad Code
                </h1>
              </div>
              <div className="lowernumbers h-[60%] w-[100%] flex items-center  px-4 justify-between">
                {numbers.map((elem, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex flex-col text-center md:gap-0 lg:gap-1"
                    >
                      <span className="md:text-xs lg:text-xl leading-[1]  font-[600]">
                        {elem.number}
                      </span>
                      <span className="md:text-xs lg:text-sm leading-[1] font-[400]">
                        {elem.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="centerboxbelowbox bg-[#ffffff] hidden md:block rounded-3xl absolute md:h-[13vw] lg:h-[10.6vw] w-48 md:top-[140%] lg:top-[148%] translate-y-[-50%] left-[80%] translate-x-[-50%]">
              <div className="belowboxupperpart h-[50%] w-full flex justify-between items-center px-4">
                <img
                  className="md:w-10"
                  src={SignInImage}
                  alt=""
                />
                <div className="flex flex-col text-center gap-1">
                  <div className="text-sm text-[#0049C6] flex items-center leading-[1]  font-[600]">
                    <FaLongArrowAltUp />
                    <h1>14%</h1>
                  </div>
                  <span className="text-xs leading-[1] font-[400]">
                    This Week
                  </span>
                </div>
              </div>
              <div className="belowboxlowerpart pt-1 px-4 h-[50%] w-full">
                <div className="flex flex-col md:gap-0 lg:gap-1">
                  <span className=" md:text-xs lg:text-sm leading-[1]  font-[600]">
                    Issues Fixed
                  </span>
                  <span className=" md:text-xl lg:text-3xl leading-[1] font-[700]">
                    500k+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full md:w-[50%] flex flex-col items-center justify-center">
        <div className="signInForm md:border-[0.1vw] border-[0.3vw] border-[#dddee1] rounded-md h-fit w-fit  lg:w-[70%]  py-9 flex flex-col items-center justify-between">
          <div className="upperPortion flex flex-col items-center justify-center md:px-2  px-5">
            <div className="nameandlogo lg:w-36 md:w-52 w-60">
              <img
                className="w-full"
                src= {NameAndLogo}
                alt=""
              />
            </div>
            <div className=" py-6 welcometext">
              <h1 className="text-2xl lg:text-3xl font-[600]">
                Welcome to CodeAnt AI
              </h1>
            </div>
            <div className="optionsButton py-1 pb-8 flex items-center lg:gap-8 gap-3">
              <NavLink
                style={(e) => {
                  return {
                    color: e.isActive ? "#ffffff" : "",
                    backgroundColor: e.isActive ? "#1570ef" : "",
                    borderColor: e.isActive ? "#1570ef" : "#dddee1",
                    fontWeight: e.isActive ? "600" : "400",
                  };
                }}
                to="/"
                className="lg:text-sm text-xl flex items-center justify-center font-[600] lg:px-20 py-3 px-14 md:border-[0.1vw] border-[0.4vw] border-[#dddee1] rounded-md"
              >
                SAAS
              </NavLink>
              <NavLink
                style={(e) => {
                  return {
                    color: e.isActive ? "#ffffff" : "",
                    backgroundColor: e.isActive ? "#1570ef" : "",
                    borderColor: e.isActive ? "#43a047" : "#dddee1",
                    fontWeight: e.isActive ? "600" : "400",
                  };
                }}
                to="/selfhosted"
                className="lg:text-sm sm:text-xl flex items-center justify-center font-[600]  lg:px-20 py-3 px-9 md:border-[0.1vw] border-[0.4vw] border-[#dddee1] rounded-md"
              >
                Self Hosted
              </NavLink>
            </div>
          </div>
          <div className="partitionLine md:h-[0.07vw] h-[0.3vw] w-full bg-[#dddee1]"></div>
          <div className="bottomPortion pt-9">
            <Outlet />
          </div>
        </div>
        <div className="privacypolicytext lg:mt-4 mt-8">
          <h1 className="text-md lg:text-sm font-[400]">
            By signing up you agree to the{" "}
            <span className="font-[700] cursor-pointer ">Privacy Policy</span> .
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
