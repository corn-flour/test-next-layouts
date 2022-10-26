"use client";

import { use } from "react";
import { getData } from "../service/api";

// This in theory is a component that fetches from the API on the client side using the use() hook.
// It currently might break with actual fetch
// https://beta.nextjs.org/docs/data-fetching/fetching#example-fetch-and-use-in-client-components
export const ClientAPIContent = () => {
  const data = use(getData()) as {
    name: string;
  };

  return <p>Client Data: {data.name}</p>;
};
