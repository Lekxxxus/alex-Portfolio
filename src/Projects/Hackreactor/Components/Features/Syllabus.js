import React from "react";

function Syllabus() {
  return (
    <div className="p-5">
      <div className="flex flex-col w-full mt-10 shadow-xl lg:flex-row lg:h-44">
        <div className="flex items-center justify-center lg:w-1/4">
          <img
            src="https://images.ctfassets.net/yr4qj72ki4ky/5D67Snstm1pE6id7v8VHkS/6221381b7b9a30c106bac25dae025880/syllabus.png?fm=webp&q=72"
            className="bg-contain"
            alt="nun"
          />
        </div>
        <div className="p-5 w-">
          <h1 className="mb-2 font-serif text-xl">
            Download the Syllabus of Our Immersive Program
          </h1>
          <p>
            We constantly improve our curriculum based on new trends, changing
            needs of the tech industry, and feedback from our students and
            alumni.
          </p>
        </div>
        <div className="flex items-center justify-center my-10 h-ful l lg:w-1/4">
          <button className="w-32 h-16 p-2 text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-white">
            Get the Syllabus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
