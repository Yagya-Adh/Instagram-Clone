import React from "react"; 
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

export default NavbarItems;
