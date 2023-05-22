import { createTRPCRouter } from "@/server/api/trpc";
import {auth, example, quiz} from "./routers"
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth, example, quiz
});

// export type definition of API
export type AppRouter = typeof appRouter;
