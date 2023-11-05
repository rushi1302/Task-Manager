import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const style =
    "p-1 bg-stone-200 border-stone-300 rounded-md w-full border-b-2 text-stone-800 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col mt-4 gap-1">
      <label className="uppercase text-sm text-stone-800 font-bold ">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={style} {...props} />
      ) : (
        <input ref={ref} className={style} {...props} />
      )}
    </p>
  );
});

export default Input;
