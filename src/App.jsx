import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutSection from "./components/Section";
import WorkExperienceSection from "./components/WorkSection";
import StatisticsSection from "./components/StaticSection";
import CallToAction from "./components/CallToAction";
import ProjectsSection from "./components/ProjectsSectıon";
import PortfolioSection from "./components/PortfolioSection";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <AboutSection />
      </div>
      <ProjectsSection />
      <PortfolioSection />
      {/* <ClientsSection /> */}
      <WorkExperienceSection />
      <StatisticsSection />
      {/* <ContactSection /> */}
      <CallToAction />
    </>
  );
};

export default App;
