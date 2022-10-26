"use client";
import { trpc } from "../utils/trpc";

export const ClientTRPC = () => {
  const { data } = trpc.example.useQuery();

  if (!data) return <div>tRPC Loading...</div>;
  return (
    <p>
      tRPC response: <span className="text-red-600 font-semibold">{data}</span>
    </p>
  );
};
