import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const auth = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return 'You are logged in and can see this secret message!'
  }),
})
