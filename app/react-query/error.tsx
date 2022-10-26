"use client";

import { useEffect } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    console.log("error: ", error);
  }, [error]);
  return (
    <div>
      <p>An error has occurred</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default ErrorBoundary;
