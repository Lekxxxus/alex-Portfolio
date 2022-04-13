import React from "react";
import Items from "../Items";

function DailyDiscover() {
  return (
    <div className="m-2">
      <div className="flex justify-start">
        <div className="h-12 bg-orange-600">
          <button className="h-10 px-10 text-lg text-orange-600 bg-white">
            DAILY DISCOVER
          </button>
        </div>
        <button className="h-12 mx-20">
          <img
            className="h-5"
            src="https://cf.shopee.ph/file/9fa409a371a3fe153fa2425999cc0d10"
            alt="lmao"
          />
        </button>
      </div>
      <Items />
    </div>
  );
}

export default DailyDiscover;
