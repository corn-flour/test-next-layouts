"use client";

import { useQuery } from "@tanstack/react-query";
import { getBaseUrl } from "../utils/get-base-url";

const fetchData = () =>
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
    res.json()
  );

export const RQFetch = () => {
  console.log(`test RQ: https://jsonplaceholder.typicode.com/todos/1`);
  const { data } = useQuery(["fetchdata"], fetchData);

  if (!data) return <div>RQ loading...</div>;

  return (
    <p>
      React Query response:{" "}
      <span className="text-red-600 font-semibold">{data.title}</span>
    </p>
  );
};
