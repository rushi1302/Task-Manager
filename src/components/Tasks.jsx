import React from "react";
import NewTask from "./NewTask";
function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-stone-500">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-400 mb-4">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 m-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-700 hover:text-red-500">
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
