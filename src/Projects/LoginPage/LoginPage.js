import React from 'react';
import Image from './components/Picture';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function LoginPage() {
  return (
    <div className="">
      <h1 className="mt-2 text-3xl font-semibold text-center">
        Sample Log-In Page.
      </h1>
      <div className="flex m-4 border-2 border-black">
        <div className="flex flex-col items-center justify-center p-12 lg:block lg:w-1/2 lg:h-screen">
          <div className="flex items-center justify-center w-20 h-16 text-xl font-bold text-white bg-black rounded">
            Logo
          </div>
          <Routes>
            <Route path="/register" component={Register} />
            <Route path="/" component={Login} />
          </Routes>
        </div>
        <div className="hidden bg-pink-500 lg:block lg:w-1/2">
          <Image />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
