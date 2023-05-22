import { api } from '@/utils/api'
import { ssgHelper } from '@/utils/ssgHelper'
import { SpinnerPage } from '@ui/Spinner'
import Head from 'next/head'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types'
import React from 'react'

const QuizView = ({ quizId }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const quiz = api.quiz.getByShortId.useQuery(quizId || '')
  if (quiz.isError) return <div>Quiz not found</div>
  if (quiz.isLoading) return <SpinnerPage />
  if (!quiz.data) return <div>Quiz not found</div>
  return (
    <>
      <Head>
        <title>{quiz.data?.name} | Quizzr</title>
      </Head>
      <h1 className="text-xl">{quiz.data?.name}</h1>
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext<{ quizId: string }>) => {
  const ssg = ssgHelper()
  if (!ctx.params?.quizId) return { props: { quizId: ctx.params?.quizId }, notFound: true }

  await ssg.quiz.getByShortId.prefetch(ctx.params.quizId)

  return {
    props: {
      trpcState: ssg.dehydrate(),
      quizId: ctx.params?.quizId,
    },
  }
}
export default QuizView
