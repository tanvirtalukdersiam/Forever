import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14 ">
        {/* left sight */}
        <div>
          <img className="w-40 mb-3.5" src={assets.logo} alt="" srcset="" />
          <p className="w-full md:w-2/3 text-gray-500 leading-6 text-pcolor">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* middle sight */}
        <div>
          <p className="text-[#4B5563] font-semibold mb-4 text-lg">COMPANY</p>
          <ul className="flex flex-col gap-1.5 text-gray-600">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              {" "}
              <Link to={"/about"}> About us</Link>
            </li>
            <li>
              {" "}
              <Link to={"/contact"}> Delivery</Link>
            </li>
            <li>
              {" "}
              <Link to={"/policy"}>Privacy policy</Link>
            </li>
          </ul>
        </div>
        {/* right sight */}
        <div>
          <p className="text-[#4B5563] font-semibold mb-4 text-lg">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1.5 text-gray-600">
            <li>01743860970</li>
            <li>tanvir620032gmail.com</li>
          </ul>
        </div>
      </div>
      {/* bottom part */}
      <div>
        <hr className="border-gray-300" />
        <p className="text-center text-sm font-normal text-pcolor py-4 ">
          Copyright © 2025 Tanvir Siam - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
