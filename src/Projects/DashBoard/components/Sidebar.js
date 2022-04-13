import React from "react";
import Buttons from "../features/data/Buttons";

function Sidebar() {
  return (
    <div className="flex flex-row w-full bg-pink-500 lg:w-56 lg:flex-col">
      <Buttons />
    </div>
  );
}

export default Sidebar;
