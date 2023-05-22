import { appRouter } from '@/server/api/root'
import { prisma } from '@/server/db'
import superjson from 'superjson'
import { createServerSideHelpers } from '@trpc/react-query/server'
export const ssgHelper = () => {
  return createServerSideHelpers({
    router: appRouter,
    ctx: { prisma: prisma, session: null },
    transformer: superjson,
  })
}
