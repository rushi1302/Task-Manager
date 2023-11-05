import React from "react";
import { Children } from "react";

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-md bg-stone-700 text-stone-400 md:text-base hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}

export default Button;
