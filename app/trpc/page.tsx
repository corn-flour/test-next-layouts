import { ClientTRPC } from "../../components/client-trpc";

const TRPCRender = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">tRPC response</h1>
      <ClientTRPC />
    </div>
  );
};
export default TRPCRender;
