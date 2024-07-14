import React, { useState } from "react";
import glass from "../../public/glass.jpg";
import mountain from "../../public/mountain.jpeg";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const BodyMain = () => {
  const [disp, setDisp] = useState(false);
  return (
    <div className="w-full flex justify-center mx-auto px-6 border-b border-grey-200 border shadow-md my-5 ">
      <div>
        <div className="flex justify-between my-2 mx-2 p-2 ">
          <div className="flex p-1">
            <img
              src={glass}
              className="rounded-full w-10 h-10 border-2 bg-black "
              alt="logo"
            />
            <p>
              <h1 className="font-bold text-sm flex ">
                Job Finder
                <div className="text-gray-600">
                  <b className="ms-2">.</b>
                  {disp ? (
                    false
                  ) : (
                    <span className="text-sm font-light"> 13h </span>
                  )}
                </div>
              </h1>

              {disp ? false : <span className="text-sm"> Sponsored</span>}
            </p>
          </div>

          <button className="font-bold text-xl ">...</button>
        </div>
        <img src={glass} alt="" />

        <div className="flex justify-between">
          <div className="flex">
            <HeartIcon className=" mx-2 p-1 size-8 text-black-500  font-extrabold" />
            <ChatBubbleOvalLeftIcon className=" mx-2 p-1 size-8 text-black-500  font-extrabold" />
            <PaperAirplaneIcon className=" mx-2 p-1 size-8 text-black-500  font-extrabold  -rotate-[50deg]" />
          </div>

          <BookmarkIcon className="size-8 p-1 text-black-500 font-bold" />
        </div>
        <h1 className="p-1 mx-2">621 likes</h1>
        <div>
          <h2 className="font-bold text-sm p-1">artworkunity</h2>
        </div>
      </div>
    </div>
  );
};

export default BodyMain;
