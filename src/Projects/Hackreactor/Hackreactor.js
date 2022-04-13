import React from "react";
import Body from "./Layers/Body";
import Footer from "./Layers/Footer";
import Navbar from "./Layers/Navbar";
import "./Styles/hackreactor.css";

function Hackreactor() {
  return (
    <div className="w-full lg:m-4">
      <h1 className="mt-2 text-3xl font-semibold text-center">
        Sample HackReactor.
      </h1>
      <div className="block w-full p-4 font-sans border-t-2 border-black lg:border-2 lg:">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Hackreactor;
