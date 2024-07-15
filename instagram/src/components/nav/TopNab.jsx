import React, { useState } from "react";
import glass from "../../../public/glass.jpg";
import mountain from "../../../public/mountain.jpeg";

const TopNab = () => {
  return (
    <div className="w-full flex justify-center p-1 overflow-x-hidden my-3">
      <div className="text-center">
        <div className="  p-2 rounded-full border-2 border-red-500 mx-2">
          <img src={mountain} className="h-12 w-12 rounded-full  " alt="" />
        </div>
        <label className="text-sm">mountain</label>
      </div>

      <div className="text-center">
        <div className="p-2 rounded-full border-2 border-red-500 mx-2">
          <img src={mountain} className="h-12 w-12 rounded-full  " alt="" />
        </div>
        <label className="text-sm">cloud nepal</label>
      </div>

      <div className="text-center">
        <div className="p-2 rounded-full border-2 border-red-500 mx-2">
          <img src={mountain} className="h-12 w-12 rounded-full" alt="" />
        </div>
        <label className="text-sm">mountain_</label>
      </div>
    </div>
  );
};
export default TopNab;
