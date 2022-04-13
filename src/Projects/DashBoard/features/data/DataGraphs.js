import React from "react";
import Graph1 from "../../images/Graph1.png";
import Graph2 from "../../images/Graph2.png";
import Graph3 from "../../images/Graph3.png";
import Graph4 from "../../images/Graph4.png";
import Ads from "../../images/ads.png";
import DataGraphsFunction from "../dataFunctions/DataGraphsFunction";

function DataGraphs() {
  return (
    <div className="m-2">
      <div className="flex flex-wrap w-full">
        <DataGraphsFunction img={Graph1} />
        <DataGraphsFunction img={Graph2} />
        <DataGraphsFunction img={Graph3} />
        <DataGraphsFunction img={Graph4} />
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full rounded-lg shadow-lg">
            <div className="w-full h-10 p-2 text-base text-gray-600 bg-gray-400 rounded-t-lg shadow-md">
              <b>TABLE</b>
            </div>
            <div className="p-4 bg-gray-100">
              <table className="w-full text-left">
                <tr className="text-gray-800">
                  <th>Name</th>
                  <th>Side</th>
                  <th>Role</th>
                </tr>
                <tr className="text-gray-700">
                  <td>Obi Wan Kenobi</td>
                  <td>Light</td>
                  <td>Jedi</td>
                </tr>
                <tr className="text-gray-700">
                  <td>Greedo</td>
                  <td>South</td>
                  <td>Scumbag</td>
                </tr>
                <tr className="text-gray-700">
                  <td>Darth Vader</td>
                  <td>Dark</td>
                  <td>Sith</td>
                </tr>
              </table>
              <button className="mt-2">See More issues...</button>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full rounded-lg shadow-lg">
            <div className="w-full h-10 p-2 text-base bg-gray-100 rounded-t-lg shadow-sm">
              ADVERT
            </div>
            <div className="p-5 text-center bg-gray-100">
              <img className="w-32 h-24" src={Ads} alt="lol" />
              Limited time offer: Get 10 free Adobe Stock images.ads via Carbon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataGraphs;
