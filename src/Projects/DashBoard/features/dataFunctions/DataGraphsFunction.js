import React from "react";

function DataGraphsFunction({ img }) {
  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className="w-full h-full rounded-lg shadow-lg">
        <div className="w-full h-10 p-2 text-base text-gray-600 bg-gray-400 rounded-t-lg shadow-md">
          <b>GRAPH</b>
        </div>
        <div>
          <img className="rounded-b-lg" src={img} alt="123" />
        </div>
      </div>
    </div>
  );
}

export default DataGraphsFunction;
