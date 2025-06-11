import React from "react";

export default function Projects() {
  return (
    <div className="w-full max-h-screen bg-[#060c11] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-full justify-center ">
        <div className="text-4xl lg:text-5xl font-medium mb-10">Portfolio</div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 grid-rows-2 gap-4 ">
          <div className="bg-black h-64 " />
          <div className="bg-black h-64 " />
          <div className="bg-black h-64 " />
          <div className="bg-black h-64 " />
        </div>
      </div>
    </div>
  );
}
