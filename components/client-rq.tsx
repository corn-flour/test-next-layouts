"use client";

import { useQuery } from "@tanstack/react-query";
import { getBaseUrl } from "../utils/get-base-url";

const fetchData = async () =>
  fetch(`${getBaseUrl()}/api/hello`, {
    cache: "no-store",
  }).then((res) => res.json());

export const RQFetch = () => {
  console.log(`test RQ: ${getBaseUrl()}/api/hello`);
  const { data } = useQuery(["fetchdata"], fetchData);

  if (!data) return <div>RQ loading...</div>;

  return (
    <p>
      React Query response:{" "}
      <span className="text-red-600 font-semibold">{data.name}</span>
    </p>
  );
};
