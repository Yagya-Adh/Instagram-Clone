import React, { useState } from "react";
import glass from "../../public/glass.jpg";
import mountain from "../../public/mountain.jpeg";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const Aside = () => {
  return (
    <div>
      <div className="flex justify-between p-2 my-4 bg-green-400 w-full">
        <div className="flex">
          <img
            src={mountain}
            className="w-12 h-12 rounded-full border-2 border-red-500 p-1"
            alt="user"
          />
          <h3 className="text-gray-600 mt-3 ms-1">Ananda Adhikari</h3>
        </div>
        <button className="text-sm text-blue-500 font-bold">Switch</button>
      </div>

      <Suggested />
    </div>
  );
};

export default Aside;

const Suggested = () => {
  return <div>Suggeted users</div>;
};
