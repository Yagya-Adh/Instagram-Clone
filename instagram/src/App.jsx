import React from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import NavBarBottom from "./components/nav/NavBarBottom";
import AsideElement from "./components/nav/AsideElement";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <div className="contain dark:bg-black dark:text-white">
        {/* navbar */}
        <div className="sm:w-3/4 md:w-1/4 invisible sm:visible transition-all ease-in">
          <NavBar />
        </div>
        {/* bottom bar */}
        <div className="visible sm:invisible fixed bottom-0 h-12 w-full transition-all ease-in">
          <NavBarBottom />
        </div>
        {/* main */}
        <div className="w-full">
          <Home />
        </div>
        {/* side bar */}
        <div className="w-2/5 lg:visible invisible transition-all ease-in">
          <AsideElement />
        </div>
      </div>
    </div>
  );
};

export default App;
