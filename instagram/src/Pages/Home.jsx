import React, { useState } from "react";
import glass from "../../public/glass.jpg";
import mountain from "../../public/mountain.jpeg";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";

import BodyMain from "./BodyMain";
import TopNab from "./TopNab.jsx";

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
