import React from "react";

function BootcampCard() {
  return (
    <div className="flex m-2 lg:justify-evenly scrollmenu">
      <div className="w-64 m-3 shadow-xl lg:w-1/3">
        <div className="w-full bg-green-500 h-72 p1"></div>
        <div className="p-6 text-center">
          <h1 className="font-serif text-3xl ">Onsite</h1>
          <h2 className="mt-1 text-xl text lg:text-2xl">12 Weeks Full-Time</h2>
          <p className="mt-2 text-left">
            Join HackReactor's software engineering program at one of the
            Galvanize campuses across the nation.
          </p>
          <div className="flex justify-center mt-10">
            <button className="w-48 h-10 mt-3 text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-64 m-3 shadow-xl lg:w-1/3 ">
        <div className="w-full bg-green-500 h-72 p2"></div>
        <div className="p-6 text-center">
          <h1 className="font-serif text-3xl">Remote</h1>
          <h2 className="mt-1 text-xl lg:text-2xl">
            12 Weeks Full-Time <br />
            (Online){" "}
          </h2>
          <p className="mt-2 text-left">
            Reinvent your career remotely with our live online immersive coding
            bootcamp, which directly mirrors our in-person progam.
          </p>
          <button className="w-48 h-10 mt-5 text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-64 m-3 shadow-xl lg:w-1/3 ">
        <div className="w-full bg-green-500 h-72 p3"></div>
        <div className="p-6 text-center">
          <h1 className="font-serif text-3xl">Remote</h1>
          <h2 className="mt-1 text-xl lg:text-2xl">
            9 Months Part-Time <br /> (Online)
          </h2>
          <p className="mt-2 text-left">
            Take the exact same Hack Reactor coding bootcamp after hours, live
            online, without having to quit your day job.
          </p>
          <button className="w-48 h-10 mt-5 text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BootcampCard;
