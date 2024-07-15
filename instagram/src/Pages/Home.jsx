import React, { useState } from "react";
import glass from "../../public/glass.jpg";
import mountain from "../../public/mountain.jpeg";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import TopNab from "../components/nav/TopNab";
import BodyMain from "../components/body/BodyMain";

const Home = () => {
  return (
    <div>
      <TopNab />
      <BodyMain />
      <BodyMain />
      <BodyMain />
      <BodyMain />
    </div>
  );
};

export default Home;
