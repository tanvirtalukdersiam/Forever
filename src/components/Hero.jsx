import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border">
      {/* hero_left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-base md:text-lg "> OUR BESTSELLER</p>
          </div>
          <h2 className="text-3xl lg:text-5xl sm:py-3 leading-relaxed prata">
            Latest Arrivals
          </h2>
          <div className="flex items-center gap-2">
            <Link className="font-semibold font-outfit text-sm md:text-base">
              SHOP NOW
            </Link>
            <p className="w-8 md:w-10 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* hero_right */}

      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
