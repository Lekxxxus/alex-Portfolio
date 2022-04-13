import React from "react";
import Messages from "../../images/envelope.png";
import Analytics from "../../images/line-graph.png";
import Payments from "../../images/purse.png";
import Tasks from "../../images/list.png";

function buttons() {
  return (
    <div className="flex flex-row w-full h-full text-white bg-gray-900 lg:justify-start justify-evenly lg:flex-col lg:p-4">
      <div className="flex flex-col items-center h-12 pb-1 mx-1 text-xs border-b-2 border-gray-700 lg:mx-2 lg:flex-row hover:border-pink-500">
        <img src={Tasks} alt="Task" className="w-8 h-8 mr-2 " />
        <button className="w-full h-full text-left bg-gray-900 ">Tasks</button>
      </div>
      <div className="flex flex-col items-center h-12 pb-1 mx-1 text-xs border-b-2 border-gray-700 lg:mx-2 lg:flex-row hover:border-indigo-600 ">
        <img src={Messages} alt="Mes" className="w-5 h-5 mr-2 " />
        <button className="w-full h-full text-left bg-gray-900 ">
          Messages
        </button>
      </div>
      <div className="flex flex-col items-center h-12 pb-1 mx-1 text-xs border-b-2 border-blue-500 lg:mx-2 lg:flex-row">
        <img src={Analytics} alt="Ana" className="inline w-5 h-5 mr-2" />
        <button className="w-full h-full text-left bg-gray-900 ">
          Analytics
        </button>
      </div>
      <div className="flex flex-col items-center h-12 pb-1 mx-1 text-xs border-b-2 border-gray-700 lg:mx-2 lg:flex-row hover:border-red-500">
        <img src={Payments} alt="Pay" className="w-8 h-8 mr-2 " />
        <button className="w-full h-full text-left bg-gray-900 ">
          Payments
        </button>
      </div>
    </div>
  );
}

export default buttons;
