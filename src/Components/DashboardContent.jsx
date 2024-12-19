import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import Repository from "./Repository";

function DashboardContent() {
  return (
    <div className="pt-24  md:px-6 flex flex-col gap-4 h-screen sm:pt-12 w-full md:w-[70%] lg:w-[80%]">
      <div className="upperfixeddiv flex flex-col gap-4 px-4">
        <div className="flex md:items-center  md:flex-row gap-5 md:justify-between flex-col">
          <div className="heading">
            <h1 className="lg:text-2xl text-3xl font-[500]">Repositories</h1>
            <h2 className="lg:text-sm text-lg mt-1 text-[#414651]">
              33 total repositories
            </h2>
          </div>
          <div className="buttons flex gap-4">
            <div className="refresh cursor-pointer md:h-fit flex items-center gap-3 w-fit rounded-lg lg:py-3 lg:px-6   px-3.5  py-2.5 border-[0.01vw] border-[#d5d7da]">
              <div className="icon leading-[1] md:text-xs">
                <FiRefreshCcw />
              </div>
              <h1 className="md:text-xs lg:leading-[1]">Refresh All</h1>
            </div>
            <div className="addrepo cursor-pointer  md:h-fit flex items-center gap-2 w-fit bg-[#1570ef] rounded-lg lg:py-3 lg:px-6 px-3.5 py-2.5 border-[0.01vw] border-[#d5d7da]">
              <div className="icon md:text-xs text-xl text-white font-[600]">
                <GoPlus />
              </div>
              <h1 className="text-white md:text-xs leading-[1] font-[600]">
                Add Repository
              </h1>
            </div>
          </div>
        </div>
        <div className="searchbar cursor-pointer md:w-[40%] px-3.5 py-2.5 flex items-center gap-3 border-[0.03vw] rounded-lg border-[#D5D7DA]">
          <div className="md:text-sm text-xl text-[#414651]">
            <IoIosSearch />
          </div>
          <h1 className="md:text-sm text-[#414651]">Search Repositories</h1>
        </div>
      </div>
      <Repository />
    </div>
  );
}

export default DashboardContent;
