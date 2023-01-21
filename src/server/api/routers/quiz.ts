import { z } from 'zod'
import { publicProcedure, createTRPCRouter } from '../trpc'
import shortid from 'shortid'
// import { TRPCError } from '@trpc/server'

export const QuizBase = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  public: z.boolean(),
})
const quizInputProcedure = publicProcedure.input(QuizBase)
// const quizEditorProcedure = publicProcedure
//   .input(z.object({ shortId: z.string() }))
//   .use(({ ctx, input, next }) => {
//     const quiz = ctx.prisma.quiz.findUnique({
//       where: { shortId: input.shortId },
//       include: { author: true, editors: true },
//     })
//     if (!quiz) throw new TRPCError({ code: 'NOT_FOUND' })
//     //TODO check if user is editor
//     return next({ ctx: { ...ctx, quiz } })
//   })

// export const quizEditProcedure = quizInputProcedure.use(({ctx, next, input, prisma})=>{
//   const a =
// })
export const quiz = createTRPCRouter({
  // Path: src/server/trpc/router/quiz.ts
  // Compare this snippet from src/server/trpc/router/example.ts:
  // hello: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input?.text ?? 'world'}`,
  //     }
  //   }),
  //
  publicList: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.quiz.findMany({
      where: {
        public: true,
      },
    })
  }),

  getByShortId: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return await ctx.prisma.quiz.findUnique({
      where: {
        shortId: input,
      },
    })
  }),
  create: quizInputProcedure.mutation(async ({ ctx, input }) => {
    let shortId = ''
    do {
      shortId = shortid.generate()
    } while (
      await ctx.prisma.quiz.findUnique({
        where: {
          shortId,
        },
      })
    )
    return await ctx.prisma.quiz.create({
      data: {
        name: input.name,
        description: input.description,
        public: input.public,
        authorId: ctx.session?.user?.id,
        shortId,
      },
    })
  }),

  update: publicProcedure.input(z.object({ data: QuizBase })).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.quiz.update({
      where: {
        id: ctx.session?.user?.id,
      },
      data: input.data,
    })
  }),
})
