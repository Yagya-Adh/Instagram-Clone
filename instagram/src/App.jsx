import React from "react";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import AsideElement from "./Pages/AsideElement";
import NavBarBottom from "./Pages/NavBarBottom";

const App = () => {
  return (
    <div>
      <div className="contain">
        <div className="sm:w-3/4 md:w-1/4 invisible sm:visible">
          <NavBar />
        </div>
        <div className="visible sm:invisible fixed bottom-0 h-12 w-full">
          <NavBarBottom />
        </div>

        <div className="w-full">
          <Home />
        </div>

        <div className="w-2/5 md:visible invisible ">
          <AsideElement />
        </div>
      </div>
    </div>
  );
};

export default App;
