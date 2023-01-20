import { createTRPCRouter } from './trpc'
import { auth, example, quiz } from './routers'
export const appRouter = createTRPCRouter({
  auth,
  example,
  quiz,
})

// export type definition of API
export type AppRouter = typeof appRouter
