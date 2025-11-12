import { router, publicProcedure } from "./server";

export const appRouter = router({
    greet: publicProcedure.query(() => 'hello Asmita from trpc!')
})

export type AppRouter = typeof appRouter;