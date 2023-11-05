import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonText }, ref) {
  const dailog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dailog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dailog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dailog" className="text-right">
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
