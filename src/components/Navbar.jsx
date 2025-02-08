import React, { useContext, useState } from "react";

import { assets } from "../assets/assets";
import { Link, Navigate, NavLink } from "react-router-dom";
import { ShopContext } from "../context/StoreContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  // const [token, setToken] = useState(true);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="flex justify-between items-center text-sm py-5 mb-5  font-medium">
      <Link to={"/"}>
        <img
          onClick={() => Navigate("/")}
          className="w-36 cursor-pointer"
          src={assets.logo}
          alt=""
        />
      </Link>
      <ul className="hidden md:flex text-base font-outfit gap-5 font-medium text-gray-600">
        <NavLink className={""} to={"/"}>
          <li className="py-1  uppercase ">HOME</li>
          <hr className="border-none  h-[2px] bg-gray-700 w-2/4 m-auto hidden" />
        </NavLink>
        <NavLink to={"/collection"}>
          <li className="py-1  uppercase">Collection</li>
          <hr className="border-none  h-[2px] bg-gray-700 w-2/4 m-auto  hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1 uppercase">ABOUT</li>
          <hr className="border-none  h-[2px] bg-gray-700 w-2/4 m-auto hidden " />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1 uppercase">Contact</li>
          <hr className="border-none  h-[2px] bg-gray-700 w-2/4 m-auto hidden " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search_menu"
        />
        <Link to="/cart" className="relative w-5 min-w-5">
          <img src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]">
            {getCartCount()}
          </p>
        </Link>
        <div className="group relative">
          <Link to={"/login"}>
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 p-4">
            <div className="flex flex-col gap-2 w-36 bg-slate-100 text-gray-500 px-3.5 py-3 rounded-[3px]">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <img
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt=""
        />

        {/*  ------------mobile menu------------- */}
        <div
          className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p className="text-lg  font-semibold">Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className={
                "py-2.5 pl-6 font-medium border text-gray-700 border-gray-300 text-base"
              }
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={
                "py-2 pl-6 font-medium border text-gray-700 border-gray-300 text-base"
              }
              to={"/collection"}
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={
                "py-2 pl-6 font-medium border text-gray-700 border-gray-300 text-base"
              }
              to={"/about"}
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={
                "py-2 pl-6 font-medium border text-gray-700 border-gray-300 text-base"
              }
              to={"/contact"}
            >
              CONTACT
            </NavLink>
          </div>

          {/* <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to={"/"}>
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/doctors"}>
              <p className="px-4 py-2 rounded inline-block"> All Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
              <p className="px-4 py-2 rounded inline-block"> ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
              <p className="px-4 py-2 rounded inline-block"> Contact</p>
            </NavLink>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
