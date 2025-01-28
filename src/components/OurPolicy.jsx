import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs">
      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="" />
        <p className="font-semibold text-sm md:text-base">
          Easy Exchange Policy
        </p>
        <p className="text-gray-400 text-sm">
          We offer hassle free exchange Policy
        </p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="" />
        <p className="font-semibold text-sm md:text-base">
          7 Days Return Policy
        </p>
        <p className="text-gray-400 text-sm">
          We provide 7 days free return policy
        </p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.support_img} alt="" />
        <p className="font-semibold text-sm md:text-base">
          Best customer support
        </p>
        <p className="text-gray-400 text-sm">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
