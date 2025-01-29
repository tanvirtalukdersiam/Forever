import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewslatterBox from "../components/NewslatterBox";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 text-gray-500">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center my-14">
        <img className="w-full max-w-[400px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-xl text-[#4B5563] font-semibold ">Our Store</p>
          <p className="text-base text-gray-500 font-normal">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-base text-gray-500 font-normal">
            Tel: (415) 555‑0132
          </p>
          <p className="text-base text-gray-500 font-normal">
            Email: greatstackdev@gmail.com
          </p>
          <p className="text-xl text-[#4B5563] font-semibold ">
            Careers at Forever
          </p>
          <p className="text-base text-gray-500 font-normal">
            Learn more about our teams and job openings.
          </p>
          <button className="cursor-pointer border text-black border-black px-7 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300 scale-x-110">
            Explore Jobs
          </button>
        </div>
      </div>
      <div>
        <NewslatterBox />
      </div>
    </div>
  );
};

export default Contact;
