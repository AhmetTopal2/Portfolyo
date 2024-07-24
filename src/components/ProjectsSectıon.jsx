import React from "react";
import SS1 from "../img/icon-development-black.svg";
import SS2 from "../img/icon-development-white.svg";
import SS3 from "../img/icon-content-black.svg";
import SS4 from "../img/icon-content-white.svg";
import SS5 from "../img/icon-design-black.svg";
import SS6 from "../img/icon-design-white.svg";

const ProjectsSection = () => {
  return (
    <div className=" container py-16 md:py-20" id="projects">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        HERE'S WHAT I'M GOOD AT
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Reasons why I was preferred!
      </h3>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={SS2} alt="development icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={SS1} alt="development icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              WEB DEVELOPMENT
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={SS4} alt="content marketing icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={SS3} alt="content marketing icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Teaching
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={SS6} alt="Mobile Application icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={SS5} alt="Mobile Application icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Curious
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/icon-email-white.svg"
                alt="Email Marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/icon-email-black.svg"
                alt="Email Marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Team work
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div> */}
        {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/icon-design-white.svg"
                alt="Theme Design icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/icon-design-black.svg"
                alt="Theme Design icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Graphic Design
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div> */}
        {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={SS7} alt="Graphic Design icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={SS7} alt="Graphic Design icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Web Design
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsSection;
