import React from "react";

function Skills() {
  return (
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      <div>
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">HTML</h4>
          <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div
            className="h-3 rounded-full bg-primary"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">CSS</h4>
          <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div
            className="h-3 rounded-full bg-primary"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            React
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div
            className="h-3 rounded-full bg-primary"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            Javascript
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">83%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div
            className="h-3 rounded-full bg-primary"
            style={{ width: "83%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
