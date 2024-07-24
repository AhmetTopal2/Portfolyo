import React from "react";

const CallToAction = () => {
  return (
    <div
      className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
      style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
    >
      <div className="container relative z-30">
        <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
          Let's work together on your next project!
        </h3>
      </div>
    </div>
  );
};

export default CallToAction;
