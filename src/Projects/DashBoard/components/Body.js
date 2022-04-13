import React from "react";
import Analytics from "../features/Analytics";
import DataAnalytics from "../features/data/DataAnalytics";
import DataGraphs from "../features/data/DataGraphs";
function Body() {
  return (
    <div className="w-full bg-gray-900 ">
      {/* Div1 */}
      <div className="bg-gray-900">
        <Analytics />
        <div className="bg-gray-300">
          <DataAnalytics />
          <DataGraphs />
        </div>
      </div>
      {/* div2 */}
      <div></div>
    </div>
  );
}

export default Body;
