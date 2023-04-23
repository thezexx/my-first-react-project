import classNames from "classnames";
import { useState } from "react";

export default function Button({ text, varidant = "default" }) {
  console.log(useState(1));
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center rounded transition": true,
        "bg-gray-200 hover:bg-gray-400": varidant === "default",
        "bg-green-500 text-white hover:bg-green-600": varidant === "success",
        "bg-rose-500 text-white hover:bg-rose-600": varidant === "danger",
        "bg-yellow-400 text-white hover:bg-yellow-500": varidant === "warning",
      })}
    >
      {text}
    </button>
  );
}
