import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="mx-auto mt-20 text-3xl text-center lg:max-w-md">
        <div className="w-full ">
          Welcome.
          <form className="flex flex-col w-full text-lg">
            <label className="mt-10 text-left">Email</label>
            <input
              className="w-full h-10 p-2 mt-2 rounded shadow-md focus:outline-none"
              placeholder="your@email.com"
            />
            <label className="mt-4 text-left">Password</label>
            <input
              className="w-full h-10 p-2 mt-2 rounded shadow-md focus:outline-none"
              placeholder="password"
            />
          </form>
          <div>
            <button className="w-full h-10 mt-8 text-xl font-bold text-white bg-black">
              Log In
            </button>
          </div>
          <div className="mt-12 text-base">
            Don't have an account?{" "}
            <Link to="/register">
              <b>
                <u>Register here. </u>
              </b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
