"use client";

import { useQuery } from "@tanstack/react-query";
import { getBaseUrl } from "../utils/get-base-url";

const fetchData = async () =>
  fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((res) =>
    res.json()
  );

export const RQFetch = () => {
  console.log(`test RQ: https://pokeapi.co/api/v2/pokemon/bulbasaur`);
  const { data } = useQuery(["fetchdata"], fetchData);

  if (!data) return <div>RQ loading...</div>;

  return (
    <p>
      React Query response:{" "}
      <span className="text-red-600 font-semibold">{data.name}</span>
    </p>
  );
};
