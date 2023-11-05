import React from "react";
import Button from "./Button";
function ProjectsSidebar({
  handleSelected,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 rounded-r-xl md:w-72 ">
      <div>
        <Button onClick={handleSelected} className="bg-red-200">
          Create a new Project
        </Button>
      </div>
      <h2 className="font-bold uppercase md:text-xl text-stone-200 mb-8 mt-4">
        Your Projects
      </h2>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left rounded-lg  font-bold hover:text-stone-500 px-2 py-1";
          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200 text-red-500";
          } else {
            cssClass += " text-stone-200";
          }
          return (
            <li key={project.id} className="mb-4">
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClass}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
