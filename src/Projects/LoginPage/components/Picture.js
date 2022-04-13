import React from "react";
import Pic from "../images/left-pic.jpg";

function Picture() {
  return (
    <div className="h-full">
      <img src={Pic} alt="left pic" className="w-full h-full" />
    </div>
  );
}

export default Picture;
