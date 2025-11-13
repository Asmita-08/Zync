import { publicProcedure, setRouter } from ".";

export const appRouter = setRouter({
    // boilerplate greeting message
    greet: publicProcedure.query(()=>{
        return {
            message: 'Hello World!',
        };
    }),

    // endpoint for connection to endpoint
    createUser: publicProcedure.query(() => {
        return {
            message: 'Hello Mademoiselle!',
        };
    })
})

export type AppRouter = typeof appRouter;