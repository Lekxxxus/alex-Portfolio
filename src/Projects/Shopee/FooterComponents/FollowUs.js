import React from "react";

function FollowUs() {
  return (
    <div className="flex flex-col items-start w-1/5 text-left">
      <h2 className="m-1 text-xs font-semibold text-gray-600">FOLLOW US</h2>
      <button className="m-1 text-xs text-gray-600 hover:text-red-600 ">
        Facebook
      </button>
      <button className="m-1 text-xs text-gray-600 hover:text-red-600">
        Instagram
      </button>
      <button className="m-1 text-xs text-gray-600 hover:text-red-600">
        Twitter
      </button>
      <button className="m-1 text-xs text-gray-600 hover:text-red-600">
        LinkedIn
      </button>
    </div>
  );
}

export default FollowUs;
