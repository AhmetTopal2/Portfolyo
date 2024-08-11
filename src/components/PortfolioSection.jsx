import React from "react";
import proje1 from "../assets/Project1.png";
import proje2 from "../assets/Project2.png";

const projects = [
  {
    id: 1,
    image: proje1,
    link: "https://pizza-project-h992qssl8-ahmettopal2s-projects.vercel.app",
    alt: "Project 1",
  },
  {
    id: 2,
    image: proje2,
    link: "https://todo-qa2e7msq1-ahmettopal2s-projects.vercel.app",
    alt: "Project 2",
  },
];

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
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src={project.image}
              className="w-full shadow"
              alt={project.alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
