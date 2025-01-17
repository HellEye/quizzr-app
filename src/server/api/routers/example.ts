import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const example = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    }),
})
