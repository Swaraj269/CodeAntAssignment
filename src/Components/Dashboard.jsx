import React from "react";
import Navbar from "./Navbar";
import SideMenubar from "./SideMenubar";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <div className="h-screen overflow-hidden w-full">
      <Navbar />
      <div className="flex">
        <SideMenubar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default Dashboard;
