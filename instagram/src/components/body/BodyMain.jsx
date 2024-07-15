import React, { useState, useEffect } from "react";
import glass from "../../../public/glass.jpg";
import {
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const BodyMain = () => {
  const [disp, setDisp] = useState(false);

  /* like */
  const [likeCount, setLikeCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [HeartIcon, setHeartIcon] = useState(null);

  const likeBtnIsClick = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
    setLikeCount((prev) => (isClicked ? prev - 1 : prev + 1));
  };

  useEffect(() => {
    const loadHeartIcon = async () => {
      const icon = isClicked
        ? await import("@heroicons/react/24/solid").then(
            (module) => module.HeartIcon
          )
        : await import("@heroicons/react/24/outline").then(
            (module) => module.HeartIcon
          );
      setHeartIcon(() => icon);
    };

    loadHeartIcon();
  }, [isClicked]);

  if (!HeartIcon) return null; // Optional loading state

  return (
    <div className="w-full h-f flex justify-center mx-auto px-6 my-5">
      <div>
        <div className="flex justify-between my-2 mx-2 p-2">
          <div className="flex p-1">
            <img
              src={glass}
              className="rounded-full w-10 h-10 border-2 bg-black"
              alt="logo"
            />
            <div>
              <h1 className="font-bold text-sm flex">
                Job Finder
                <div className="text-gray-600">
                  <b className="ms-2">.</b>
                  {!disp && <span className="text-sm font-light"> 13h </span>}
                </div>
              </h1>
              {!disp && <span className="text-sm"> Sponsored</span>}
            </div>
          </div>

          <button className="font-bold text-xl">...</button>
        </div>
        <img src={glass} alt="post" className="border shadow-md" />

        <div className="flex justify-between">
          <div className="flex">
            <HeartIcon
              onClick={likeBtnIsClick}
              className={`mx-2 p-1 size-8 font-extrabold ${
                isClicked ? "text-red-600" : "text-black-500"
              }`}
            />
            <ChatBubbleOvalLeftIcon className="mx-2 p-1 size-8 text-black-500 font-extrabold" />
            <PaperAirplaneIcon className="mx-2 p-1 size-8 text-black-500 font-extrabold -rotate-[50deg]" />
          </div>

          <BookmarkIcon className="size-8 p-1 text-black-500 font-bold" />
        </div>
        <h1 className="p-1 mx-2">{likeCount} likes</h1>
        <div className="border-b shadow-md">
          <h2 className="font-bold text-sm p-1">artworkunity</h2>
        </div>
      </div>
    </div>
  );
};

export default BodyMain;
