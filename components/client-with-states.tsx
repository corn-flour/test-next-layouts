"use client";

import { useState } from "react";

// This in theory is a component that fetches from the API on the client side using the use() hook.
export const ClientWithStates = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-4 items-start">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 py-2 px-6 rounded-md"
        onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <p>
        Count: <span className="text-red-600 font-semibold">{count}</span>
      </p>
    </div>
  );
};
