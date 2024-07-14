import React, { useState } from "react";
import glass from "../../public/glass.jpg";
import mountain from "../../public/mountain.jpeg";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const AsideElement = () => {
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
      <SuggestedListItem />
    </div>
  );
};

export default AsideElement;

const SuggestedListItem = () => {
  return (
    <div>
      <h1 className="text-gray-400 font-bold">Suggeted for you</h1>
      <CardComponentList user={"Yagya Adhikari"} button={"Follow"} />
      <CardComponentList user={"Ananda Adhikari"} button={"Follow"} />
      <CardComponentList user={"Home Adhikari"} button={"Follow"} />
    </div>
  );
};

const CardComponentList = ({ button, user }) => {
  return (
    <div>
      <div className="flex justify-between p-2 my-4 w-full">
        <div className="flex">
          <img
            src={mountain}
            className="w-auto lg:w-12 h-12 rounded-full border-2 border-red-500 p-1"
            alt="user"
          />
          <h3 className="text-gray-600 mt-3 ms-1">{user}
            <span className="">New to instagram </span>
          </h3>
        </div>
        <button className="text-sm text-blue-500 font-bold">{button}</button>
      </div>
    </div>
  );
};
