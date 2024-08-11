import React from "react";

const skillsData = [
  { name: "HTML", level: "85%" },
  { name: "CSS", level: "85%" },
  { name: "React", level: "70%" },
  { name: "Javascript", level: "83%" },
  { name: "Tailwind CSS", level: "85%" },

];

function Skills() {
  return (
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      {skillsData.map((skill, index) => (
        <div key={index} className={index !== 0 ? "pt-6" : ""}>
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase text-black">
              {skill.name}
            </h4>
            <h3 className="font-body text-3xl font-bold text-primary">
              {skill.level}
            </h3>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-lila">
            <div
              className="h-3 rounded-full bg-primary"
              style={{ width: skill.level }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
