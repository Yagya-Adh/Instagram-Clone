import React from "react";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Aside from "./Pages/Aside";

const App = () => {
  return (
    <div>
      <div className="contain">
        <div className="w-2/5">
          <NavBar />
        </div>
        <div className="w-full">
          <Home />
        </div>

        <div className="w-2/5">
        <Aside />
        </div>

      </div>
    </div>
  );
};

export default App;
