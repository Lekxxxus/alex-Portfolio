import React from "react";
import Cart from "../images/shopping cart.png";
import Logo from "../images/logo.png";
import Insta from "../images/insta.png";
import Facebook from "../images/Facebook.png";
import Search from "../images/search.png";
import Notif from "../images/Notification.png";
import Help from "../images/Help.png";

function Navbar() {
  return (
    <div className="flex flex-col w-full h-32 p-2 bg-gradient-to-b from-red-600 to-yellow-600">
      <div className="flex items-center justify-around text-xs text-gray-300 lg:text-sm">
        <div className="flex mr-32">
          <button className="px-1 border-r border-gray-600 hover:text-gray-400">
            Seller Centre
          </button>
          <button className="px-1 border-r border-gray-600 hover:text-gray-400">
            Sell on Shopee
          </button>
          <button className="px-1 border-r border-gray-600 hover:text-gray-400">
            Download
          </button>
          <p className="flex mx-1">
            Follow us on
            <img className="w-5 ml-2" src={Facebook} alt="lol" />
            <img className="w-5 mx-1" src={Insta} alt="lol" />
          </p>
        </div>
        <div className="flex ">
          <button className="flex items-center px-1 mx-1 ">
            <img className="w-4 mx-2" src={Notif} alt="lmao" />
            Notifications
          </button>
          <button className="flex px-1 mx-1 ">
            <img className="w-5 mx-1" alt="a" src={Help} />
            Help
          </button>
          <button className="pl-1 pr-2 mx-1 border-r ">
            <b>Sign Up</b>
          </button>
          <button className="pr-1 mx-1 ">
            <b>Login</b>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pt-4">
        <div className="pl-48 pr-10">
          <img className="w-48" src={Logo} alt="hehi" />
        </div>
        <div className="w-2/3 ">
          <div className="flex w-full p-2 bg-white rounded">
            <input
              className="w-full h-8 text-sm rounded focus:outline-none"
              placeholder="Search for products, brands and shops"
            />
            <button className="w-16 px-5 bg-yellow-600 rounded focus:outline-none">
              <img className="w-6 " src={Search} alt="l" />
            </button>
          </div>
          <div className="text-xs text-left text-gray-300">
            <button className="mx-1">Oversized Shirt</button>
            <button className="mx-1">Study Table</button>
            <button className="mx-1">Korean Top</button>
            <button className="mx-1">Surgical Mask</button>
            <button className="mx-1">Marikina Sandals</button>
            <button className="mx-1">Christmas Curtain</button>
            <button className="mx-1">Seamless Panty</button>
            <button className="mx-1">Terno Pambahay</button>
          </div>
        </div>
        <button className="w-1/4 ">
          <img className="pl-20" src={Cart} alt="cart" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
