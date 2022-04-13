import React from "react";
import Attention from "../Components/Attention";
import GetStarted from "../Components/GetStarted";
// import BestISA from "../Components/BestISA";
import Header from "../Components/Header";
import Logos from "../Components/Logos";
import News from "../Components/News";
import OurBootcamp from "../Components/OurBootcamp";
import Video from "../Components/Video";

function Body() {
  return (
    <div className="w-full">
      <Header />
      <Logos />
      <Video />
      <OurBootcamp />
      <Attention />
      <News />
      <GetStarted />
    </div>
  );
}

export default Body;
