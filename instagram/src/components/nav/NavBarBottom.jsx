import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import NavbarItems from "./NavBarItems";
const NavBarBottom = () => {
  const lists = [
    {
      title: "Home",
      icon: <HomeIcon className="size-8 text-black-500 font-bold" />,
    },

    {
      title: "Reels",
      icon: <VideoCameraIcon className="size-8 text-black-500 font-bold" />,
    },
    {
      title: "Create",
      icon: (
        <PlusIcon className="size-8 text-black-500 font-bold border-2 border-black rounded-xl m-0" />
      ),
    },
    {
      title: "Messages",
      icon: (
        <ChatBubbleOvalLeftIcon className="size-8 text-black-500 font-bold" />
      ),
    },
    {
      title: "Notifications",
      icon: <HeartIcon className="size-8 text-black-500 font-bold" />,
    },
    {
      title: "Profile",
      icon: <UserCircleIcon className="size-8 text-black-500 font-bold" />,
    },
  ];

  return (
    <div className="w-full flex bg-white border justify-center shadow-md">
      {lists.map((item, index) => (
        <div className=" p-1" key={index}>
          <NavbarItems icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default NavBarBottom;
