import React from "react";
import "./App.css";

import AboutSection from "./components/Section";
import WorkExperienceSection from "./components/WorkSection";
import StatisticsSection from "./components/StaticSection";
import CallToAction from "./components/CallToAction";
import PortfolioSection from "./components/PortfolioSection";
import HeroSection from "./components/HeroSectıon";

const App = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <WorkExperienceSection />
      <StatisticsSection />
      <CallToAction />
    </>
  );
};

export default App;
