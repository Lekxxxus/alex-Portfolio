import React from "react";

function Video() {
  return (
    <div className="flex justify-end mt-10">
      <div className="flex flex-col p-5 lg:flex-row max-w-7xl">
        <div className="my-20 text-left lg:w-1/2">
          <h1 className="font-serif text-2xl">
            The Best and Most Immersive Coding <br /> Bootcamp
          </h1>
          <p className="mt-5">
            Hack Reactor is one of the top coding bootcamps and we select
            high-potential students through a rigorous admissions process. In
            our software engineering bootcamp, we train students through over
            800 hours of Computer Science and JavaScript curriculum that closely
            models the software engineering industry.
          </p>
          <p className="mt-2">
            Led by passionate and experienced teachers, engineering leaders and
            former hiring managers, we produce software engineers the best teams
            want to hire. We offer our immersive bootcamp programs at Galvanize
            campuses in Austin, Boulder, Denver, Los Angeles, New York, Phoenix,
            San Francisco, Seattle, and live online.
          </p>
        </div>
        <div className="lg:w-11/12 ">
          <iframe
            title="Hackreactor Video"
            src="https://player.vimeo.com/video/329678340"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
