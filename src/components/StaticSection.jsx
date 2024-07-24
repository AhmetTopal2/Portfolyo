import React from "react";
import IconProject from "../img/icon-project.svg";
import IconAward from "../img/icon-award.svg";
import IconHappy from "../img/icon-happy.svg";
import IconPuzzle from "../img/icon-puzzle.svg";
const StatisticsSection = () => {
  return (
    <div
      className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
      style={{ backgroundImage: "url(../img/experience-figure.png)" }}
      id="statistics"
    >
      <div className="container">
        <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
            <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <img
                  src={IconProject}
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon project"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  12
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Finished Projects
                </h4>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <img
                  src={IconAward}
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon award"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  +100
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Hours
                </h4>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <img
                  src={IconHappy}
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon happy clients"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  8
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Happy Clients
                </h4>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <img
                  src={IconPuzzle}
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon puzzle"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                  99
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Bugs Fixed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
