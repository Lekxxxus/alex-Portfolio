import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";

function DashBoard() {
  return (
    <div className="w-full lg:m-4 shopeeheight">
      <h1 className="mt-2 text-3xl font-semibold text-center">
        Sample Shopee.
      </h1>
      <div className="absolute p-4 border-t-2 border-black lg:border-2">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default DashBoard;
