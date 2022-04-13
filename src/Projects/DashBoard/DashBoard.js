import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
function DashBoard() {
  return (
    <div>
      <h1 className="mt-2 text-3xl font-semibold text-center">
        Sample DashBoard.
      </h1>
      <div className="m-4 border-2 border-black">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
