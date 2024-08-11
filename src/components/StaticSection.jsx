import React from "react";
import IconProject from "../img/icon-project.svg";
import IconAward from "../img/icon-award.svg";
import IconHappy from "../img/icon-happy.svg";

const statisticsData = [
  {
    id: 1,
    icon: IconProject,
    value: "12",
    description: "Finished Projects",
  },
  {
    id: 2,
    icon: IconAward,
    value: "+100",
    description: "Hours",
  },
  {
    id: 3,
    icon: IconHappy,
    value: "8",
    description: "Happy Clients",
  },

];

const StatisticsSection = () => {
  return (
    <div
      className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
      style={{ backgroundImage: "url(../img/experience-figure.png)" }}
      id="statistics"
    >
      <div className="container">
        <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div className="flex justify-center gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
            {statisticsData.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
              >
                <div>
                  <img
                    src={stat.icon}
                    className="mx-auto h-12 w-auto md:h-20"
                    alt={`icon ${stat.description.toLowerCase()}`}
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    {stat.description}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
