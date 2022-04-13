import React from "react";
import Wallet from "../../images/purse.png";
import Tasks from "../../images/list.png";
import Add from "../../images/add.png";
import Issues from "../../images/Issues.png";
import People from "../../images/people.png";
import Server from "../../images/server.png";
import Arrows from "../../images/arrow.png";
import Green from "../../images/caret green.png";
import Yellow from "../../images/caret yellow.png";
import cRed from "../../images/caret-red.png";
import DataAnalyticsFunction from "../dataFunctions/DataAnalyticsFunction";

function DataAnalytics() {
  return (
    <div className="">
      <div className="flex flex-wrap w-full">
        <DataAnalyticsFunction
          title="TOTAL REVENUE"
          value="$3249"
          icon={Wallet}
          caret={Green}
          caretStyle="inline w-5 mx-2"
          styleb="w-full h-24 pb-1 bg-green-500 rounded-lg"
          iconbg="w-16 h-16 bg-green-500 rounded-full"
        />
        <DataAnalyticsFunction
          title="TOTAL USERS"
          value="249"
          icon={People}
          caret={Arrows}
          caretStyle="inline w-5 mx-2"
          styleb="w-full h-24 pb-1 bg-yellow-600 rounded-lg"
          iconbg="w-16 h-16 bg-yellow-600 rounded-full"
        />
        <DataAnalyticsFunction
          title="TOTAL USERS"
          value="249"
          icon={Add}
          caret={Yellow}
          caretStyle="inline w-5 mx-2"
          styleb="w-full h-24 pb-1 bg-yellow-500 rounded-lg"
          iconbg="w-16 h-16 bg-yellow-500 rounded-full"
        />
        <DataAnalyticsFunction
          title="TOTAL USERS"
          value="152 days"
          icon={Server}
          caret={null}
          caretStyle="inline w-5 mx-2 hidden"
          styleb="w-full h-24 pb-1 bg-blue-600 rounded-lg"
          iconbg="w-16 h-16 bg-blue-600 rounded-full"
        />
        <DataAnalyticsFunction
          title="TO DO LIST"
          value="7 tasks"
          icon={Tasks}
          caret={Yellow}
          caretStyle="inline w-5 mx-2 hidden"
          styleb="w-full h-24 pb-1 bg-indigo-500 rounded-lg"
          iconbg="w-16 h-16 bg-indigo-500 rounded-full"
        />
        <DataAnalyticsFunction
          title="ISSUES"
          value="3"
          icon={Issues}
          caret={cRed}
          caretStyle="inline w-5 mx-2 hidden"
          styleb="w-full h-24 pb-1 bg-red-500 rounded-lg"
          iconbg="w-16 h-16 bg-red-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default DataAnalytics;
