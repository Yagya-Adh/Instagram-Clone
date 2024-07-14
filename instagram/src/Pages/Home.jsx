import React from "react";
import glass from "../../public/glass.jpg";
import mountain from "../../public/mountain.jpeg";
const Home = () => {
  return (
    <div className="h-screen">
      <TopNab />
      <BodyMain />
    </div>
  );
};

export default Home;

const TopNab = () => {
  return (
    <div className="bg-gray-500 w-full">
      <h1>Top Bar Reels /Story</h1>
    </div>
  );
};

const BodyMain = () => {
  return (
    <div className="border-b border-grey-200">
      <div className="flex">
        <div>
          <img src={glass} alt="" />
          <p>
            <h1 className="font-extrabold">Job Finder</h1>
            <span>Sponsored</span>
          </p>
        </div>
        <button className="font-bold">...</button>
      </div>
      POSTS here...
    </div>
  );
};
