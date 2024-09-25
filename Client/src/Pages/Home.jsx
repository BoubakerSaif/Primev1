import React from "react";
import Slide from "../Components/Slide";
import FAQ from "../Components/FAQ";
import Hero from "../Components/Hero";
import Jobs from "../Components/Jobs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Jobs />
      <Slide />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
