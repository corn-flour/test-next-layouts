import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  example: t.procedure.query(async () => {
    return "hello from tRPC";
  }),
});

export type AppRouter = typeof appRouter;
