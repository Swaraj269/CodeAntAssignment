import React from "react";
import { Link } from "react-router-dom";
import gitlab from "../assets/Images/gitlab.png";
import SSO from "../assets/Images/SSO.png";
function SelfHostedOptions() {
  return (
    <div className="flex flex-col lg:gap-2 gap-3">
      {[
        {
          text: "Self Hosted GitLab",
          photo: gitlab,
        },
        {
          text: "Sign in with SSO",
          photo: SSO,
        },
      ].map((elem, idx) => {
        return (
          <Link
            to="/dashboard"
            key={idx}
            className="options cursor-pointer  active:scale-[0.98] hover:border-[#010101] flex gap-5 border-[0.3vw] md:border-[0.1vw] rounded-md items-center justify-center lg:px-24 py-3 px-16 border-[#dddee1] "
          >
            <div className="icon lg:w-[10%]">
              <img src={elem.photo} alt="" />
            </div>
            <div className="md:text-sm  lg:text-xs font-[600]">{elem.text}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default SelfHostedOptions;
