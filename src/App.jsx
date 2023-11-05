import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectSelected, setProjectSelected] = useState({
    status: undefined,
    projects: [],
    tasks: [],
  });

  // function for adding task
  function handleAddTask(text) {
    setProjectSelected((prev) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        projectID: prev.status,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }
  // function for adding task
  function handleDeleteTask(id) {
    setProjectSelected((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // function for adding project
  const handleProject = (projectData) => {
    setProjectSelected((prev) => {
      const newProject = {
        id: Math.random(),
        ...projectData,
      };
      return {
        ...prev,
        status: null,
        projects: [...prev.projects, newProject],
      };
    });
    setProjectSelected((prev) => {
      return { ...prev, status: undefined };
    });
  };

  // console.log(projectSelected);

  const handleSelected = () => {
    setProjectSelected((prev) => {
      return { ...prev, status: null };
    });
  };

  const handleCancelProject = () => {
    setProjectSelected((prev) => {
      return { ...prev, status: undefined };
    });
  };

  const handleSelectProject = (id) => {
    setProjectSelected((prev) => {
      return { ...prev, status: id };
    });
  };

  const deleteHandler = () => {
    setProjectSelected((prev) => {
      return {
        ...prev,
        status: undefined,
        projects: prev.projects.filter((project) => project.id !== prev.status),
      };
    });
  };

  const selectedProject = projectSelected.projects.find(
    (project) => project.id === projectSelected.status
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={deleteHandler}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectSelected.tasks}
    />
  );
  if (projectSelected.status === null) {
    content = (
      <NewProject onAdd={handleProject} onCancel={handleCancelProject} />
    );
  } else if (projectSelected.status === undefined) {
    content = <NoProjectSelected handleSelected={handleSelected} />;
  }

  return (
    <main className="h-screen flex gap-8 my-6">
      <ProjectsSidebar
        handleSelected={handleSelected}
        projects={projectSelected.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectSelected.status}
      />
      {content}
    </main>
  );
}

export default App;
