import React from "react";
import Slide from "../Components/Slide";
import FAQ from "../Components/FAQ";
import Hero from "../Components/Hero";
import Jobs from "../Components/Jobs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Jobs />
      <Slide />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
