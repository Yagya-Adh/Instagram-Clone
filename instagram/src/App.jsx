import React from "react";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import AsideElement from "./Pages/AsideElement";
import NavBarBottom from "./Pages/NavBarBottom";

const App = () => {
  return (
    <div>
      <div className="contain dark:bg-black dark:text-white" >
        {/* navbar */}
        <div className="sm:w-3/4 md:w-1/4 invisible sm:visible border-r-2">
          <NavBar />
        </div>
        {/* bottom bar */}
        <div className="visible sm:invisible fixed bottom-0 h-12 w-full">
          <NavBarBottom />
        </div>
        {/* main */}
        <div className="w-full">
          <Home />
        </div>
        {/* side bar */}
        <div className="w-2/5 lg:visible invisible ">
          <AsideElement />
        </div>
      </div>
    </div>
  );
};

export default App;
