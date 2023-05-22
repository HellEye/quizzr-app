import { z } from 'zod'
import { publicProcedure, createTRPCRouter, protectedProcedure } from '../trpc'
import shortid from 'shortid'
import { TRPCError } from '@trpc/server'
import crypto from 'crypto'
export const QuizBase = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  public: z.boolean(),
})
export const quizEditorProcedure = publicProcedure
  .input(z.object({ shortId: z.string(), editLink: z.string().optional() }))
  .use(async ({ ctx, input, next }) => {
    const quiz = await ctx.prisma.quiz.findUnique({
      where: { shortId: input.shortId },
      include: { author: true, editors: true },
    })
    if (!quiz) throw new TRPCError({ code: 'NOT_FOUND' })
    //check if user is editor
    const isAuthor =
      ctx.session?.user?.id !== undefined &&
      quiz.author?.id !== undefined &&
      quiz.author?.id === ctx.session?.user?.id
    const isEditor = quiz.editors.some((editor) => editor.id === ctx.session?.user?.id)
    const matchLink = quiz.editLink === input.editLink
    if (!isAuthor && !isEditor && !matchLink) throw new TRPCError({ code: 'UNAUTHORIZED' })
    return next({ ctx: { ...ctx, quiz } })
  })

export const quiz = createTRPCRouter({
  publicList: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.quiz.findMany({
        where: {
          public: true,
        },
      })
  ),

  userList: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.quiz.findMany({
      where: {
        authorId: ctx.session?.user?.id,
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

  create: publicProcedure.input(QuizBase).mutation(async ({ ctx, input }) => {
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
    const editLink = crypto.randomBytes(32).toString('base64').replace('/', '_').replace('+', '-')

    return await ctx.prisma.quiz.create({
      data: {
        name: input.name,
        description: input.description,
        public: input.public,
        authorId: ctx.session?.user?.id,
        editLink,
        shortId,
      },
    })
  }),

  createAuthed: protectedProcedure.input(QuizBase).mutation(async ({ ctx, input }) => {
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
  update: quizEditorProcedure.input(z.object({ data: QuizBase })).mutation(
    async ({ ctx, input }) =>
      await ctx.prisma.quiz.update({
        where: {
          id: ctx.quiz.id,
        },
        data: input.data,
      })
  ),

  delete: quizEditorProcedure.mutation(async ({ ctx }) => {
    await ctx.prisma.quiz.delete({
      where: {
        id: ctx.quiz.id,
      },
    })
  }),
})
