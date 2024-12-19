import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "../Components/SignInPage";
import SAASOption from "../Components/SAASOption";
import SelfHostedOptions from "../Components/SelfHostedOptions";
import Dashboard from "../Components/Dashboard";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInPage />}>
          <Route path="/" element={<SAASOption />}></Route>
          <Route path="/selfhosted" element={<SelfHostedOptions />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default Routing;
