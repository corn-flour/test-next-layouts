import { ClientAPIContent } from "../components/client-api-content";
import { ServerAPIContent } from "../components/server-api-content";
import { ServerFetchOnReq } from "../components/server-api-fetch-on-req";
import { ServerContentWithUse } from "../components/server-content-with-use";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">This is the home page!</h1>

      <section>
        <h2 className="text-2xl font-bold">Server API with async</h2>
        {/**
         * This component breaks TS because it is not expecting an async component yet
         * @ts-ignore */}
        <ServerAPIContent />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Server API with use()</h2>
        <ServerContentWithUse />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Client API fetching</h2>
        <ClientAPIContent />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Server fetch on request</h2>
        {/**
         * @ts-ignore */}
        <ServerFetchOnReq />
      </section>
    </div>
  );
}
