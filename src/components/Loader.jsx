// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-orange-300 bg-opacity-50 z-50">
      <div className="relative">
        <div className="w-40 h-40 bg-orange-300 border-solid rounded-full animate-fadeInLeftToRight"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white-500 text-xl">
          <span className="animate-fadeInLoading">Please Wait</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
