import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  example: t.procedure.query(async () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve("hello from tRPC"), 1000);
    });
  }),
});

export type AppRouter = typeof appRouter;
