import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function AboutMe() {
  return (
    <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
      <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Who am I?
      </h2>

      <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        I'm Ahmet Topal, a Web Designer and Developer.
      </h4>
      <p className="pt-6 font-body leading-relaxed text-grey-20">
        With a background in Biology from Hacettepe University and a passion for
        web design and development, I have honed my skills through various
        personal projects. My journey includes developing a simple e-commerce
        application using React, where I implemented form validations and worked
        with libraries like Toastify, TailwindCSS, Date FNS, React Router DOM,
        Formik, Yup, and Redux Toolkit.
        <br />
        <br />
        I am adept at understanding complex state management and debugging
        issues. My personal qualities include a strong sense of responsibility
        and a commitment to rules and regulations.
        <br />
        <br />
        In the future, I aspire to create a social media platform that
        facilitates communication and knowledge sharing, as well as to develop
        and expand an e-commerce site, potentially turning it into a company.
        Outside of programming, I enjoy reading fantasy novels, staying updated
        with advancements in space science, and working on UI-focused projects
        like todo apps and note-taking applications.
        <br />
        <br />
        Based in Ankara, I have a keen interest in barista skills and enjoy
        making espresso and working in cafes. In my spare time, I also follow
        American football and indulge in computer games.
      </p>
      <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
        <div className="flex items-center justify-center sm:justify-start">
          <p className="font-body text-lg font-semibold uppercase text-grey-20">
            Connect with me
          </p>
          <div className="hidden sm:block">
            <i className="bx bx-chevron-right text-2xl text-primary"></i>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
          <a href="https://github.com/AhmetTopal2" className="pl-4">
            <i className="bx bxl-github text-2xl text-primary hover:text-yellow"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmet-topal-8652b52bb/"
            className="pl-4"
          >
            <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
          </a>
          <a href="https://www.instagram.com/a.topal2/" className="pl-4">
            <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
          </a>
        </div>
        <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group ml-4">
          <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          <ArrowDownwardIcon></ArrowDownwardIcon>Download CV
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
