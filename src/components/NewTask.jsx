import React, { useState } from "react";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm text-stone-700 bg-stone-200"
        onChange={(e) => handleChange(e)}
        value={enteredTask}
      />
      <button
        className="text-stone-1000 hover:text-stone-600 font-bold border-4 px-4 py2 border-blue-100"
        onClick={handleClick}
        disabled={enteredTask.length === 0}>
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
