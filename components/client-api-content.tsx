"use client";

import { use } from "react";
import { getData } from "../service/api";

// !If used with actual fetch, this component will break and cause an infinite number of network calls
// https://beta.nextjs.org/docs/data-fetching/fetching#example-fetch-and-use-in-client-components
// const fetchData = async () =>
//   fetch("http://localhost:3000/api/hello", {
//     cache: "no-store",
//   }).then((res) => res.json());

// This in theory is a component that fetches from the API on the client side using the use() hook.
export const ClientAPIContent = () => {
  const data = use(getData()) as {
    name: string;
  };

  return <p>Client Data: {data.name}</p>;
};
