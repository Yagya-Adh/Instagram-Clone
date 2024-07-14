import React from "react";
import logo from "../../public/instagram.jpeg";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";


const NavbarItems = ({ icon, title }) => {


    
    return (
      <div className="flex hover:bg-gray-300 px-2 py-1 rounded w-full">
        {icon}
        <label className="size-6 text-black-500 font-bold mt-1 mx-2">
          {title}
        </label>
      </div>
    );
  };