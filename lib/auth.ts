import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/app/generated/prisma/client";
import prismaAPI from "./db";

export const auth = betterAuth({
    database: prismaAdapter(prismaAPI, {
        provider: "postgresql", 
    }),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        
    }
});