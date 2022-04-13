import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  render() {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mt-20 text-3xl">
          <div className="w-full text-center lg:text-left">
            Join Us.
            <form className="flex flex-col w-full text-lg">
              <label className="mt-10 text-left">Name</label>
              <input
                className="w-full h-10 p-2 mt-2 border border-blue-300 shadow-sm"
                placeholder="John Smith"
              />
              <label className="mt-4 text-left">Email</label>
              <input
                className="w-full h-10 p-2 mt-2 border border-blue-300 shadow-sm"
                placeholder="your@email.com"
              />
              <label className="mt-4 text-left">Password</label>
              <input
                className="w-full h-10 p-2 mt-2 border border-blue-300 shadow-sm"
                placeholder="password"
              />
              <label className="mt-4 text-left">Confirm Password</label>
              <input
                className="w-full h-10 p-2 mt-2 border border-blue-300 shadow-sm"
                placeholder="password"
              />
            </form>
            <div>
              <button className="w-full h-10 mt-8 text-xl font-bold text-white bg-black">
                Register
              </button>
            </div>
            <div className="mt-12 mb-20 text-xs lg:text-base">
              Already have an account?{" "}
              <Link to="/">
                <b>
                  <u>Log in here.</u>
                </b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
