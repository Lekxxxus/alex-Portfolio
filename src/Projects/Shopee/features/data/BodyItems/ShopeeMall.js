import React from "react";
import Authentic from "../../../images/authenticate.png";
import Return from "../../../images/return.png";
import Shipping from "../../../images/Shipping.png";
import Caret from "../../../images/care.png";

function ShopeeMall() {
  return (
    <div className="flex items-center justify-between h-10 px-10 m-2 mt-10">
      <div className="flex items-center">
        <button className="pr-4 m-2 text-base font-semibold text-red-800 border-r border-gray-500">
          SHOPEE MALL
        </button>

        <img className="w-5 h-4 pl-2" src={Authentic} alt="hoho" />
        <button className="m-2 text-sm">100% Authentic</button>

        <img className="w-3 h-3" src={Return} alt="hoho" />
        <button className="m-2 text-sm">7-Day Returns</button>

        <img className="w-4 h-3" src={Shipping} alt="hoho" />
        <button className="m-2 text-sm">Free Shipping & COD</button>
      </div>
      <div className="flex items-center">
        <button className="mx-2 text-red-800">See All</button>
        <img src={Caret} alt="lol" className="w-4 h-4" />
      </div>
    </div>
  );
}

export default ShopeeMall;
