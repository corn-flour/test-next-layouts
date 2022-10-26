import { ServerFetchOnReq } from "../../components/server-api-fetch-on-req";

const SSRPage = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold">
        Server component fetch on request (SSR)
      </h1>
      {/**
       * @ts-ignore */}
      <ServerFetchOnReq />
    </main>
  );
};

export default SSRPage;
