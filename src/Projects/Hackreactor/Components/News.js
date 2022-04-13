import React from "react";

function News() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="mt-20 font-serif text-3xl text-center">
        Hack Reactor in the News
      </h1>
      <div className="flex scrollmenu">
        <div className="m-4 shadow-lg w-96 lg:w-1/3">
          <div className="w-full h-72 n1"></div>
          <div className="p-5">
            <p className="mt-5">
              "My cohort included a lawyern a neuroscientist, a Navy helicopter
              mechanic and a professional video-game player."
            </p>
            <div className="flex items-end justify-center">
              <button className="w-56 h-10 mt-5 border border-blue-500 hover:bg-blue-400 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 shadow-lg w-96 lg:w-1/3">
          <div className="w-full h-72 n2"></div>
          <div className="p-5">
            <p className="mt-5">
              "The Hack Reactor bootcamp experience was a total game changer."
            </p>
            <div className="flex items-end justify-center mt-5">
              <button className="w-56 h-10 mt-12 border border-blue-500 lg:mt-6 hover:bg-blue-400 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 shadow-lg w-96 lg:w-1/3">
          <div className="w-full h-72 n3"></div>
          <div className="p-5 ">
            <p className="mt-5">The Top 33 Coding Bootcamps.</p>
            <div className="flex items-end justify-center mt-16 lg:mt-10">
              <button className="w-56 h-10 mt-12 border border-blue-500 hover:bg-blue-400 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
