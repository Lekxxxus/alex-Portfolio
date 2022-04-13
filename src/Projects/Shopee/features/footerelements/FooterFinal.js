import React from "react";

function FooterFinal() {
  return (
    <div className="flex justify-between text-sm text-gray-600">
      <h3>© 2020 Shopee. All Rights Reserved</h3>
      <p className="flex">
        <h3 className="pr-1">Country & Region:</h3>
        <button className="pr-2 border-r border-gray-500">Singapore</button>
        <button className="pr-2 border-r border-gray-500">Indonesia</button>
        <button className="pr-2 border-r border-gray-500">Taiwan</button>
        <button className="pr-2 border-r border-gray-500">Thailand</button>
        <button className="pr-2 border-r border-gray-500">Malaysia</button>
        <button className="pr-2 border-r border-gray-500">Vietnam</button>
        <button className="pr-2 border-r border-gray-500">Philippines</button>
        <button>Brazil</button>
      </p>
    </div>
  );
}

export default FooterFinal;
