# Test Next.js 13
This is a [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) project made to try out Next.js 13 features.

## Tests

- Server component data fetching with async/await. This uses a mock api function because api endpoint is not available on build.
- Server component data fetching with use(). This uses a mock api function because api endpoint is not available on build.
- Client component data fetching with use(). This uses a mock api function because it currently does not work with actual fetch().
- Server component data fetching with async/await and cache: "no-store". This calls to the `/api/hello` endpoint
- Client component data fetching with RQ. This calls to the `/api/hello` endpoint
- Client component data fetching with tRPC. This calls to the trpc `example` endpoint

## Run
This is only made to run locally using `pnpm`.

- Start dev server: `pnpm dev`
- Build site: `pnpm build`
- Serve built site: `pnpm start`
