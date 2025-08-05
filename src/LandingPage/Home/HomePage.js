import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../Navbar";
import WorkInfo from "./WorkInfo";
import Impact from "./Impact";
import OpenAccount from "../OpenAccount";
import Reward from "./Reward";
import Footer from "../Footer";
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkInfo />
      <Impact />
      <Reward />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
