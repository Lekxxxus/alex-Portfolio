import React from "react";

function Testimonies() {
  return (
    <div className="">
      <div className="flex flex-col mt-10 lg:flex-row">
        <div className="lg:w-3/4">
          <div className="flex flex-col max-w-2xl p-5 m-5 shadow-lg lg:p-0 lg:flex-row">
            <div className="w-full h-64 lg:h-auto lg:w-1/4 t1"></div>
            <div className="w-full p-5 lg:w-2/3">
              <p>
                "I just accepted an offer from Amex to be a software engineer in
                New York, and it is exactly the type of position I wanted.
                Galvanize's careeer services and support have far surpassed my
                expectations"
              </p>
              <i>Melissa Louie, Software Engineer, American Express</i>
            </div>
          </div>
          <div className="flex flex-col max-w-2xl p-5 m-5 shadow-lg lg:p-0 lg:flex-row">
            <div className="w-full h-64 lg:h-auto lg:w-1/4 t2"></div>
            <div className="w-full p-5 lg:w-2/3">
              <p>
                "When the bootcamp believed in me by offering the opportunity
                for an Income Share Agreement, then I believed in the bootcamp."
              </p>
              <i>Kevin Fang, Software Engineer, Self-Employed</i>
            </div>
          </div>
          <div className="flex flex-col max-w-2xl p-5 m-5 shadow-lg lg:p-0 lg:flex-row">
            <div className="w-full h-64 lg:h-auto lg:w-1/4 t3"></div>
            <div className="w-full p-5 lg:w-2/3">
              <p>
                "I've been around teachers for a really long time, both in a
                collegial sense and in a student-teacher type of relationship.
                One of my favorite teachers of all time was the lead instructor
                of Hack Reactor at Austin."
              </p>
              <i>
                Evelyn Binkard, Software Engineer, Kapsch Trafficcom North
                America
              </i>
            </div>
          </div>
        </div>
        <div className="m-5 ml-0 shadow-xl lg:w-1/3">
          <div className="w-32 h-32 mx-auto my-2 a1"></div>
          <div className="w-32 h-32 mx-auto my-2 a2"></div>
          <div className="w-32 h-32 mx-auto my-2 a3"></div>
          <div className="m-4">
            <p className="text-center">
              Career Karma, Switchup, and Course Report all consider Hack
              Reactor a top bootcamp in several categories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
