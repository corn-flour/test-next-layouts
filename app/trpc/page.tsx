"use client";
import { trpc } from "../../utils/trpc";

const TRPCRender = () => {
  const { data, error, isLoading } = trpc.example.useQuery();
  if (isLoading) return <div>TRPC loading...</div>;
  if (error) {
    console.error(error);
    return <div>error</div>;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold">tRPC response</h1>
      <p>Response from tRPC: {data}</p>
    </div>
  );
};
export default TRPCRender;
