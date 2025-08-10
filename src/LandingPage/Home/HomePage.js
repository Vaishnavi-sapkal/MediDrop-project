import React from "react";
import HeroSection from "./HeroSection";
import WorkInfo from "./WorkInfo";
import Impact from "./Impact";
import Reward from "./Reward";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";

import SignUp from "../SignUp/Signup"; // Signup section
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkInfo />
      <Reward />
      <Impact />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
