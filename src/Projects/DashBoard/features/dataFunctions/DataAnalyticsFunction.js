import React from "react";

function DataAnalyticsFunction({
  title,
  icon,
  value,
  caret,
  styleb,
  iconbg,
  caretStyle,
}) {
  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className={styleb}>
        <div className="flex items-center w-full h-full p-4 bg-white rounded-lg ">
          <div>
            <div className={iconbg}>
              <img src={icon} alt="wallet" />
            </div>
          </div>
          <div className="w-2/3 text-center ">
            <div className="text-sm text-gray-600">
              <b>{title}</b>
            </div>
            <div className="text-3xl">
              <b>
                {value}
                <img src={caret} alt="meow" className={caretStyle} />
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalyticsFunction;
