import AboutMe from "./AboutMe";
import Skills from "./Skills";

const AboutSection = () => {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
};

export default AboutSection;
