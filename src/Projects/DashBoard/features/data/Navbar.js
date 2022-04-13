import React from "react";
import Search from "../../images/Search.png";
import Caret from "../../images/caret.png";

function Navbar() {
  return (
    <div className="items-center justify-between w-full h-20 p-2 bg-gray-900 lg:h-16 lg:flex">
      <div className="flex w-full h-8">
        <div className="w-1/4 text-3xl">&#128515;</div>
        <div className="flex w-full">
          <div className="flex items-center justify-center w-10 p-1 bg-gray-800 rounded-l">
            <img
              className="w-6 h-full bg-gray-800 rounded-l"
              src={Search}
              alt="lmao"
            />
          </div>
          <input
            placeholder="Search"
            className="w-full h-8 bg-gray-800 rounded-r "
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-evenly lg:w-2/6">
        <button className="mt-2 text-white lg:mx-8 lg:mt-0">Active</button>
        <button className="mt-2 text-gray-600 lg:mx-8 hover:text-white lg:mt-0">
          link
        </button>
        <button className="flex items-center mt-2 text-white lg:mx-8 lg:mt-0">
          &#129302; Hi, User
          <img src={Caret} alt="caret" className="w-4 ml-1 " />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
