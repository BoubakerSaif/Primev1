import React from "react";
import Slide from "../Components/Slide";
import FAQ from "../Components/FAQ";
import Hero from "../Components/Hero";
import Jobs from "../Components/Jobs";
import Video from "../Components/VideoNav";
import VideoNav from "../Components/VideoNav";

const Home = () => {
  return (
    <div>
      <VideoNav />
      <Hero />
      <Jobs />
      <Slide />
      <FAQ />
    </div>
  );
};

export default Home;
