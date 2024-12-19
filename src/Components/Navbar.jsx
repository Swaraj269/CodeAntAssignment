import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const menulinks = [
    { text: "Repositories", photo: "./src/assets/Images/RepoIcon.png" },
    { text: "AI Code Review", photo: "./src/assets/Images/codeIcon.png" },
    { text: "Cloud Security", photo: "./src/assets/Images/cloudIcon.png" },
    { text: "How to Use", photo: "./src/assets/Images/howtoUseIcon.png" },
    { text: "Settings", photo: "./src/assets/Images/settingsIcon.png" },
    { text: "Support", photo: "./src/assets/Images/phoneIcon.png" },
    { text: "Logout", photo: "./src/assets/Images/logOutIcon.png" },
  ];
  return (
    <div className="fixed sm:hidden flex z-[500] h-24 w-screen top-0 ">
      <div className="h-24 w-full bg-[#ffffff] flex items-center justify-between px-4 ">
        <div className="img">
          <img
            className="w-44"
            src="./src/assets/Images/NameAndLogo.png"
            alt=""
          />
        </div>
        <div
          onClick={() => setMenuClick((prev) => !prev)}
          className="menuicon text-3xl"
        >
          {menuClick ? <IoClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <div
        className={`coverpage ${
          menuClick ? "bg-[#02020255]" : "transparent"
        } pointer-events-none absolute z-[-2]  h-screen w-full`}
      ></div>
      <div
        className={`menu absolute top-[100%] z-[-1] ${
          menuClick ? "translate-y-[0%]" : "translate-y-[-100%]"
        } h-[45vh] w-full flex px-4 gap-5 flex-col justify-start bg-[#ffffff]`}
      >
        <div className="dropdown border-[0.05vw] px-4 py-2 flex text-[#474c56] items-center justify-between  rounded-lg border-[#dddff1]">
            <h1 className="text-xl text-[#101111]">SwarajSingh</h1>
            <IoIosArrowDown />
        </div>
        <div className="menulinks ">
          {menulinks.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="menuitem py-2 flex items-center gap-4 px-4"
              >
                <img className="w-6 h-6 object-contain " src={elem.photo} alt="" />
                <h1 className="text-xl text-[#414156] font-[400]" >{elem.text}</h1 >
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
