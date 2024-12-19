import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { IoMdCloudOutline } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
function SideMenubar() {
  const menulinks = [
    { text: "Repositories", photo: <AiOutlineHome /> },
    { text: "AI Code Review", photo: <FaCode /> },
    { text: "Cloud Security", photo: <IoMdCloudOutline /> },
    { text: "How To Use", photo: <FaBook /> },
    { text: "Settings", photo: <CiSettings /> },
    { text: "Support", photo: <IoCallOutline /> },
    { text: "Logout", photo: <IoIosLogOut /> },
  ];
  return (
    <div className="hidden sm:hidden md:flex  border-r-[0.1vw] md:w-[30%] border-r-[#dddff1] sm:flex flex-col justify-between h-screen lg:w-[20%] md:py-6 md:px-4  lg:py-7 lg:px-5">
      <div className="  flex flex-col md:gap-6 lg:gap-7">
        <div className="logodiv w-[65%]">
          <img src="./src/assets/Images/NameAndLogo.png" alt="" />
        </div>
        <div className="dropdown cursor-pointer w-[94%] border-[0.05vw] md:px-3 md:py-3 lg:px-[1vw] lg:py-2 flex text-[#474c56] items-center justify-between  rounded-lg border-[#dddff1]">
          <h1 className=" md:text-sm lg:text-sm font-[400] text-[#101111]">
            SwarajSingh
          </h1>
          <div className="downarrow lg:text-sm">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="menulinks">
          {menulinks.map((elem, idx) => {
            if (idx <= 4)
              return (
                <div
                  key={idx}
                  className="link flex md:gap-[1.5vw] lg:gap-[1vw] active:scale-[0.98] font-[400] hover:font-[600] md:py-3 md:px-[1.5vw] lg:3 lg:px-[1vw] rounded-lg items-center text-[#474c56] cursor-pointer hover:bg-[#1570ef] hover:text-[#ffffff]"
                >
                  <div className="icon md:text-xl">{elem.photo}</div>
                  <p className="md:text-md ">{elem.text}</p>
                </div>
              );
          })}
        </div>
      </div>
      <div className="bottompart  ">
        <div className="menulinks">
          {menulinks.map((elem, idx) => {
            if (idx > 4)
              return (
                <div
                  key={idx}
                  className="link flex md:gap-[1.5vw] lg:gap-[1vw] active:scale-[0.98] font-[400] hover:font-[600] md:py-3 md:px-[1.5vw] lg:3 lg:px-[1vw] rounded-lg items-center text-[#474c56] cursor-pointer hover:bg-[#1570ef] hover:text-[#ffffff]"
                >
                  <div className="icon md:text-xl">{elem.photo}</div>
                  <p className="md:text-md ">{elem.text}</p>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideMenubar;
