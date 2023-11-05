import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    let enteredTitle = title.current.value;
    let enteredDescription = description.current.value;
    let enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="mb-3">Invalid Input</h2>
        <p className="mb-3">Please enter a valid value for every input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-center gap-4 my-8">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950 "
              onClick={onCancel}>
              cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="title" />
          <Input type="text" ref={description} label="description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
