import React from "react";
import herobg from "../assets/images/herobg.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[600px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span> Devlivered
          </h1>
        </div>
        <img
          className="w-full max-h-[600px] object-cover"
          src={herobg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
