import React from "react";

function Logos() {
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <h1 className="font-serif text-3xl">
          "Hack Reactor Grads are Our First Choice"
        </h1>
        <p className="hidden mt-5 lg:block">
          The best coding bootcamps simulate a real-world software environment
          for their students; the grads are so well-prepared, they come in and
          hit the ground running, that's really what we're looking for.
        </p>
        <p>
          <i>- Dustin B., Cisco</i>
        </p>
        <div className="flex flex-wrap items-center justify-between mt-8 lg:justify-evenly ">
          <div className="w-1/4 h-20 m-2 lg:w-1/6 fb"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 li"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 go"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 pp"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 ap"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 am"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 co"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 mi"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 vi"></div>
          <div className="w-1/4 h-20 m-2 lg:w-1/6 ac"></div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
