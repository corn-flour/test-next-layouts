import Link from "next/link";
import { ClientAPIContent } from "../components/client-api-content";
import { ServerAPIContent } from "../components/server-api-content";
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

        <Link href="/ssr" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Client side fetching with RQ</h2>
        <Link
          href="/client-fetch"
          className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Client side fetching with tRPC</h2>
        <Link href="/trpc" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
    </div>
  );
}
