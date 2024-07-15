import React from "react";
import logo from "../../../public/instagram.jpeg";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import NavbarItems from "./NavBarItems";
const NavBar = () => {
  const lists = [
    {
      title: "Home",
      icon: <HomeIcon className="size-8 text-black-500 font-bold" />,
    },

    {
      title: "Search",
      icon: <MagnifyingGlassIcon className="size-8 text-black-500 font-bold" />,
    },
    {
      title: "Explore",
      icon: <HeartIcon className="size-8 text-black-500 font-bold" />,
    },
    {
      title: "Reels",
      icon: <VideoCameraIcon className="size-8 text-black-500 font-bold" />,
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
      title: "Create",
      icon: (
        <PlusIcon className="size-8 text-black-500 font-bold border-2 border-black rounded-xl m-0" />
      ),
    },
    {
      title: "Profile",
      icon: <UserCircleIcon className="size-8 text-black-500 font-bold" />,
    },
  ];
  return (
    <div className=" h-screen fixed flex flex-col justify-between  dark:bg-black dark:text-white bg-[#f1f4f7] text-black-500 font-medium border-r-2  ">
      <img src={logo} alt="logo" className="h-32 w-full" />

      <div className="h-full flex flex-col">
        {lists.map((item, index) => (
          <div
            className="mb-2 ms-1 px-2 me-3 mt-2 w-full transition-all duration-500"
            key={index}
          >
            <NavbarItems icon={item.icon} title={item.title} />
          </div>
        ))}
      </div>
      <div
        className="flex static justify-start transition-all duration-500 
       mb-3 ms-2 py-1 px-2 me-2 text-center rounded-md w-40 hover:bg-gray-300"
      >
        <button className="mx-2">
          <Bars3Icon className="size-8 text-black-500 font-bold" />
        </button>
        <label className="size-6 text-black-500 font-bold mt-1 mx-2">
          More
        </label>
      </div>
    </div>
  );
};

export default NavBar;

/* 




{lists.map((item, index) => (
        <div
          className="mb- ms-1 px-2 me-3 mt- w-full transition-all duration-500"
          key={index}
        >
          <NavbarItems icon={item.icon} title={item.title} />
        </div>
      ))}




*/
