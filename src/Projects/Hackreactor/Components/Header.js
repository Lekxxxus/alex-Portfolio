import React from "react";
import BestISA from "./Features/BestISA";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-500 bg">
      <div className="max-w-4xl p-5 mx-auto mt-48 text-center text-white">
        <h1 className="font-serif text-2xl lg:text-5xl">
          The Most Advanced Coding Bootcamp: Think Like a Software Engineer
        </h1>
        <p className="items-center justify-center hidden mt-5 text-xl lg:flex">
          Don't just learn to code.&nbsp;<b>Reinvent your career</b>{" "}
          &nbsp;full-time, part-time, in-person or online.
        </p>
        <button className="w-48 mt-20 bg-blue-500 lg:w-64 h-9">
          Start Learning for Free
        </button>
      </div>
      <div className="w-full bg-gray-300 mt-28 lg:h-36">
        <div className="items-center block max-w-5xl m-5 mx-auto lg:flex justify-evenly">
          <div className="flex flex-col items-center p-2 lg:w-1/4">
            <h1>Rated "Best Coding Bootcamp"</h1>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/sksuV6uf7Dk7BuJAO6jzh/ea76164dc3dbc774e2de7d5900793105/coures_report_and_switchup.svg?q=72"
              alt="none"
              className="mt-5"
            />
          </div>
          <div className="flex flex-col items-center p-2 lg:w-1/4">
            <h1>Quora Reviews</h1>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/7KZf31h4YbcuK9PSoQv64y/0c762b131b5364c11a6d06158e0f3dc7/reviews.svg?fm=webp&q=72"
              alt="none"
              className="mt-5"
            />
          </div>
          <div className="flex flex-col items-center p-2 lg:w-1/4">
            <h1>Rated "Best ISA Bootcamps"</h1>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/68mq7WCZ3J4lJouASZGQTV/245dc03ba4179461dbe6c6569951d0f6/best_isa.svg?fm=webp&q=72"
              alt="none"
              className="mt-5"
            />
          </div>
          <div className="flex flex-col items-center p-2 lg:w-1/4">
            <h1>Over 8,000 Alumni Including 65 at</h1>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/1iq8A0Ybl4vZ3NaFf73YCs/d725df79ba9b7d54491ef25756268320/google.svg?fm=webp&q=72"
              alt="none"
              className="mt-5"
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-4 border-blue-500" />
      <BestISA />
    </div>
  );
}

export default Header;
