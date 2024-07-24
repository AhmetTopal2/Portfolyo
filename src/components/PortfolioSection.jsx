import React from "react";

const PortfolioSection = () => {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Projects
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src='https://picsum.photos/1080/720?random=1'
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src='https://picsum.photos/1080/720?random=2'
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src='https://picsum.photos/1080/720?random=3'
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src='https://picsum.photos/1080/720?random=4'
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
      </div>
    </div>
  );
};

export default PortfolioSection;
