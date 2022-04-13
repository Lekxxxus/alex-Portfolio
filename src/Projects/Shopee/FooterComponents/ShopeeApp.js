import React from "react";

function ShopeeApp() {
  return (
    <div className="flex flex-col items-start w-1/5 text-left">
      <h2 className="m-1 text-xs font-semibold text-gray-600">
        SHOPPEE APP DOWNLOAD
      </h2>
      <div className="flex">
        <button className="m-1 text-xs text-gray-600 hover:text-red-600 ">
          About Us
        </button>
        <div className="flex flex-col">
          <button className="m-1 text-xs text-gray-600 hover:text-red-600">
            Shopee Blog
          </button>
          <button className="m-1 text-xs text-gray-600 hover:text-red-600">
            Shopee Careers
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopeeApp;
