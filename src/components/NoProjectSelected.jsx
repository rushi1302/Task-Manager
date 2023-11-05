import React from "react";
import Button from "./Button";
import noProjects from "../assets/no-projects.png";
function NoProjectSelected({ handleSelected }) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        src={noProjects}
        alt="no project selected"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="font-bold text-xl text-stone-500 my-4">
        No project Selected
      </h2>
      <p className="my-4 text-stone-500 font-bold">
        Select a project or get started with new one
      </p>
      <p>
        <Button onClick={handleSelected}>Create a new Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
