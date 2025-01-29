import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewslatterBox from "../components/NewslatterBox";
const About = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-6 text-gray-500">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-12 flex items-center flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[400px] rounded-[2px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="font-bold text-lg">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-2xl my-7">
        <h2 className="text-gray-500">
          Why <span className="font-semibold text-gray-700">Choose Us</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">
            Quality Assurance:
          </b>
          <p className="text-[#454545] text-[17px]">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-gray-300  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">Convenience:</b>
          <p className="text-[#454545] text-[17px]">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-gray-300  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">
            Exceptional Customer Service:
          </b>
          <p className="text-[#454545] text-[17px]">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <div>
        <NewslatterBox />
      </div>
    </div>
  );
};

export default About;
