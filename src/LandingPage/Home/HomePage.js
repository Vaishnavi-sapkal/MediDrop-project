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
      <main>
        <HeroSection />
        <WorkInfo />
        <Impact />
        <Reward />
        <OpenAccount />
        <SignUp />  {/* मुख्य कंटेंट संपल्यावर, Footerच्या वर */}
      </main>
      <Footer />     {/* कायम शेवटी */}
    </>
  );
}

export default HomePage;
