import React from "react";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <div className="contain">
        <NavBar />
        <Home/>

        <aside>helo</aside>
      </div>
    </div>
  );
};

export default App;
