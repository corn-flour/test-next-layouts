import { RQFetch } from "../../components/client-rq";

const ClientFetch = () => {
  if (typeof window !== "undefined") return <></>;
  return (
    <main>
      <h1 className="text-4xl font-bold">Fetch with RQ</h1>
      <RQFetch />
    </main>
  );
};

export default ClientFetch;
