import React from "react";
import BootcampCard from "./Features/BootcampCard";
import Syllabus from "./Features/Syllabus";
import Testimonies from "./Features/Testimonies";

function OurBootcamp() {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <h1 className="mt-10 font-serif text-3xl text-center">Our Bootcamps</h1>
        <div className="">
          <BootcampCard />
          <Syllabus />
          <Testimonies />
        </div>
      </div>
    </div>
  );
}

export default OurBootcamp;
