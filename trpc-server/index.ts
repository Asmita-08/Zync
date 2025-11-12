import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const setRouter = t.router
export const publicProcedure = t.procedure;