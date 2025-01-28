import React from "react";
import Hero from "../components/Hero";
import Latest_Collection from "../components/Latest_Collection";
import Best_Seller from "../components/Best_Seller";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest_Collection />
      <Best_Seller />
    </div>
  );
};

export default Home;
