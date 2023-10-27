"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-between gap-4">
      <button
        onClick={() => setCounter(counter + 1)}
        className="text-white font-semibold bg-blue-400 p-2 rounded-md"
      >
        Click me
      </button>
      <p className="text-center rounded-md bg-gray-500 text-white p-2">
        {counter}
      </p>
    </div>
  );
}
