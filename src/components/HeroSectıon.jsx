import React from "react";
import Header from "./Header";
import Author from "../img/Ben.jpg";

const HeroSection = () => {
  return (
    <>
      <Header />
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: "url(../img/bg-hero.jpg)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img
                src={Author}
                className="h-48 rounded-full sm:h-56"
                alt="author"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm Ahmet Topal!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href="https://github.com/AhmetTopal2" className="pl-4">
                    <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmet-topal-8652b52bb/"
                    className="pl-4"
                  >
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/a.topal2/"
                    className="pl-4"
                  >
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
