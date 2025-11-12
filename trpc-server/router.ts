import { publicProcedure, setRouter } from ".";

export const appRouter = setRouter({
    greet: publicProcedure.query(() => ('hello Asmita, greetings from TRPC!')),
    love:  publicProcedure.query(() => ('I think Soham loves you!'))
})

export type AppRouter = typeof appRouter;