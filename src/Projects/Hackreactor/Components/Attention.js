import React from "react";

function Attention() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="w-full">
        <h1 className="hidden mt-10 font-serif text-3xl text-center lg:block">
          What's Getting Attention at Hack Reactor?
        </h1>
        <div className="flex flex-col m-5 shadow-lg lg:flex-row">
          <div className="bg-gray-500 lg:h-auto h-80 lg:w-1/4 at1"></div>
          <div className="p-5 lg:w-3/4">
            <h1 className="mb-2 font-serif text-xl">
              Galvanize Names Harsh Patel as Chief Executive Officer
            </h1>
            <p>
              Galvanize, the leader in technology workforce education, announced
              today that Harsh Patel has been named CEO of Galvanize. Karl Maier
              also joins as Executive Chairman. Former CEO, Al Rosabal, will be
              stepping down as CEO after making key additions to the executive
              leadership team.
            </p>
          </div>
          <div className="flex justify-center w-full p-5 lg:w-1/4">
            <button className="w-40 h-10 mt-10 text-blue-400 border border-blue-400">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col m-5 shadow-lg lg:flex-row">
          <div className="bg-gray-500 lg:h-auto h-80 lg:w-1/4 at2"></div>
          <div className="p-5 lg:w-3/4">
            <h1 className="mb-2 font-serif text-xl">
              Top 6 jobs that can be done remotely
            </h1>
            <p>
              If you’ve always wanted to work from home, there’s never been a
              better time to start thinking about a new career.
            </p>
          </div>
          <div className="flex justify-center w-full p-5 lg:w-1/4">
            <button className="w-40 h-10 mt-10 border border-blue-400">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col m-5 shadow-lg lg:flex-row">
          <div className="bg-gray-500 lg:h-auto h-80 lg:w-1/4 at3"></div>
          <div className="p-5 lg:w-3/4">
            <h1 className="mb-2 font-serif text-xl">
              Take Hack Reactor Courses at Galvanize Campuses
            </h1>
            <p>
              Hack Reactor’s top coding bootcamps are now taught at Galvanize
              campuses in Austin, Boulder, Denver, Los Angeles, New York,
              Phoenix, San Francisco, and Seattle (as well as online). Galvanize
              campuses are unique technology ecosystems designed to support your
              learning journey while providing access to professional
              mentorship, unparalleled networking opportunities,
              industry-related events, and growing startups all in one building.
            </p>
          </div>
          <div className="flex justify-center w-full p-5 lg:w-1/4">
            <button className="w-40 h-10 mt-10 border border-blue-400">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attention;
