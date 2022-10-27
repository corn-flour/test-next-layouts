import Link from "next/link";
import { ClientWithStates } from "../components/client-with-states";
import { ServerAPIContent } from "../components/server-api-content";
import { ServerContentWithUse } from "../components/server-content-with-use";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">This is the home page!</h1>
        <p className="text-sm text-gray-600">
          Despite having component that requests data in this page, they should
          all be static on build. The root loading component will only be shown
          on dev.
        </p>
        <p className="text-sm text-gray-600">
          The fake api call is used on some components because /api is not
          available on build.
        </p>
        <p className="text-sm text-red-600 font-semibold italic">
          Apparently it needs to be shared or something before it works?
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold">Client component with states</h2>

        <ClientWithStates />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Server API with async</h2>
        <p className="text-sm text-gray-600">
          This should become static on build
        </p>
        {/**
         * This component breaks TS because it is not expecting an async component yet
         * @ts-ignore */}
        <ServerAPIContent />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Server API with use()</h2>
        <p className="text-sm text-gray-600">
          As far as I can tell from the documentation, use() should only be for
          frontend, but this somehow still works? It has the exact same result
          as using async server component as far as I can tell (aside from the
          lack of TS error).
        </p>
        <ServerContentWithUse />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Client fetching with use()</h2>
        <p className="text-sm text-gray-600">
          It currently does not work with actual fetch() though, which will
          cause infinite network calls. This might be why this becomes static?
        </p>
        <p className="text-red-600 font-bold underline text-sm">
          The component is commented from this page because it seems to break
          other client component on the same page, making them rerender
          indefinitely.
        </p>
        {/* <ClientAPIContent /> */}
      </section>

      <section>
        <h2 className="text-2xl font-bold">Server fetch on request</h2>

        <p className="text-sm text-gray-600">
          This is also a server component like the first section, but the fetch
          request is forced to be called per request instead of only on build,
          making it the old gSSP effectively.
        </p>
        <Link href="/ssr" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Server fetch with Pokeapi</h2>

        <p className="text-sm text-gray-600">
          Apparently this fails to work. The fetch fails to parse to json on
          server.
        </p>
        <Link href="/pokeapi" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">
          Client side fetching with useEffect
        </h2>
        <p className="text-sm text-gray-600">
          This is classic client side fetching with useEffect().
        </p>
        <Link href="/use-effect" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">
          Client side fetching with useEffect on /api
        </h2>
        <p className="text-sm text-gray-600">
          This is classic client side fetching with useEffect() on /api/hello.
        </p>
        <Link
          href="/use-effect-api"
          className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Client side fetching with RQ</h2>
        <p className="text-sm text-gray-600">
          This is (actual) client side fetching with react query. The layout of
          it is also a client component since it needs context.
        </p>
        <Link href="/react-query" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Client side fetching with SWR</h2>
        <p className="text-sm text-gray-600">
          This is (actual) client side fetching with SWR.
        </p>
        <Link href="/swr" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Client side fetching with tRPC</h2>
        <p className="text-sm text-gray-600">
          This is also an (actual) client side fetching with tRPC. The layout of
          it is also a client component since it needs context.
        </p>
        <p className="text-sm text-gray-600">
          It is set up with the{" "}
          <Link
            href="https://trpc.io/docs/v10/react"
            className="text-blue-600 hover:text-blue-800"
            target="_blank">
            Usage with React
          </Link>{" "}
          section in tRPC v10 docs instead of{" "}
          <Link
            href="https://trpc.io/docs/v10/nextjs"
            className="text-blue-600 hover:text-blue-800"
            target="_blank">
            Usage with Next.js
          </Link>
        </p>
        <Link href="/trpc" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
    </div>
  );
}
