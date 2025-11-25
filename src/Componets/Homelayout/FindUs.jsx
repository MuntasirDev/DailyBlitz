import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="font-bold text-lg mb-4 text-center sm:text-left">Find Us On</h2>
      
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 w-full">
        <button className="btn bg-base-100 justify-start flex-1 flex items-center gap-2 text-sm sm:text-base">
          <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" /> FaceBook
        </button>
        <button className="btn bg-base-100 justify-start flex-1 flex items-center gap-2 text-sm sm:text-base">
          <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" /> Twitter
        </button>
        <button className="btn bg-base-100 justify-start flex-1 flex items-center gap-2 text-sm sm:text-base">
          <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
