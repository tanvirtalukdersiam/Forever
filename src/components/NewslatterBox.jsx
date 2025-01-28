import React from "react";

const NewslatterBox = () => {
  return (
    <div className="text-center">
      <p className="font-medium text-2xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="w-3/4 m-auto text-base  md:text-lg text-gray-400 mt-2.5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-5 border border-gray-300 pl-3">
        <input
          className="w-full sm:flex-1  outline-none  "
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xl px-9 py-3 cursor-pointer"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewslatterBox;
