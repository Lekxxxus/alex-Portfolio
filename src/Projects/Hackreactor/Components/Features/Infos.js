import React from "react";
import Social from "./Social";

function Infos() {
  return (
    <div className="flex flex-col items-center mx-5 text-center lg:text-left lg:justify-around lg:flex-row">
      <div className="mt-5 lg:mt-auto">
        <h1 className="font-bold">GET STARTED</h1>
        <p className="mt-5">Admissions Process</p>
        <p className="mt-5">Live Prep Course</p>
        <p className="mt-5">Scholarships</p>
        <p className="mt-5">Tour</p>
      </div>
      <hr className="block w-full mt-5 lg:hidden" />
      <div className="mt-10 lg:mt-auto">
        <h1 className="font-bold">COMPANY</h1>
        <p className="mt-5">About</p>
        <p className="mt-5">Careers</p>
        <p className="mt-5">Blog</p>
        <p className="mt-5">Regulatory Information</p>
      </div>
      <hr className="block w-full mt-5 lg:hidden" />
      <div className="mt-10 lg:mt-auto">
        <h1 className="font-bold">More</h1>
        <p className="mt-5">Partnerships</p>
        <p className="mt-5">FAQ</p>
        <p className="mt-5">Enterprise</p>
      </div>
      <hr className="block w-full mt-5 lg:hidden" />
      <div className="mt-10 lg:mt-auto">
        <h1 className="font-bold">REVIEWS</h1>
        <div className="flex">
          <p className="m-5 mx-2">Google</p>
          <p className="m-5 mx-2">SwitchUp</p>
          <p className="m-5 mx-2">Yelp</p>
          <p className="m-5 mx-2">Course Report</p>
        </div>
        <hr className="lg:hidden" />
        <h1 className="mt-5 font-bold lg:mt-auto">SOCIAL</h1>
        <Social />
      </div>
    </div>
  );
}

export default Infos;
