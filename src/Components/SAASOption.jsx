import React from "react";
import { Link } from "react-router-dom";

function SAASOption() {
  return (
    <div className="flex px-4 flex-col lg:gap-2 gap-3">
      {[
        {
          text: "Sign in with Github",
          photo: "./src/assets/Images/github.png",
        },
        {
          text: "Sign in with Bitbucket",
          photo: "./src/assets/Images/bitbucket.png",
        },
        {
            text: "Sign in with Azure Devops",
            photo: "./src/assets/Images/AzureDevops.png",
        },{
            text: "Sign in with GitLab",
            photo: "./src/assets/Images/gitlab.png",
        }
      ].map((elem, idx)=>{
        return(
            <Link to="/dashboard" key={idx} className="options cursor-pointer active:scale-[0.98] hover:border-[#010101] flex lg:gap-3 gap-5 md:border-[0.1vw] border-[0.3vw] rounded-md items-center justify-center lg:px-24 py-3 px-16 border-[#dddee1] ">
                <div className="icon lg:w-[10%]">
                    <img src={elem.photo} alt="" />
                </div>
                <div className="text lg:text-xs md:text-sm font-[600]">{elem.text}</div>
            </Link>
        )
      })}
    </div>
  );
}

export default SAASOption;
