import React from "react";
import Hero from "../components/Hero";
import Latest_Collection from "../components/Latest_Collection";
import Best_Seller from "../components/Best_Seller";
import OurPolicy from "../components/OurPolicy";
import NewslatterBox from "../components/NewslatterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest_Collection />
      <Best_Seller />
      <OurPolicy />
      <NewslatterBox />
    </div>
  );
};

export default Home;
