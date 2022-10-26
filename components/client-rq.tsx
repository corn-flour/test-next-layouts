"use client";

import { useQuery } from "@tanstack/react-query";

const fetchData = async () =>
  fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  }).then((res) => res.json());

export const RQFetch = () => {
  const { data } = useQuery(["fetchdata"], fetchData);

  if (!data) return <div>RQ loading...</div>;

  return <p>React Query response: {data.name}</p>;
};
