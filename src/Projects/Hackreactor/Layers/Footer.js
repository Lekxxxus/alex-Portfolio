import React from "react";
import Stay from "../Components/Stay";

function Footer() {
  return (
    <div className="">
      <div className="w-full mt-20 bg-blue-400 lg:h-96">
        <Stay />
      </div>
      <div className="h-20 text-white bg-blue-800 opacity-80">
        <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
          <p>© 2020 Galvanize. All rights reserved.</p>
          <div className="flex text-black">
            <p className="hover:text-white">Terms &nbsp;</p>
            <p className="hover:text-white">/ Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
