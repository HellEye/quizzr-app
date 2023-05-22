import { Card, CardDescription, CardTitle } from '@ui/card'
import { SpinnerPage } from '@ui/Spinner'
import Link from 'next/link'
import { api } from '@/utils/api'

const Home = () => {
  const publicQuizzes = api.quiz.publicList.useQuery()
  if (publicQuizzes.isLoading) return <SpinnerPage />
  return (
    <div className="flex w-full flex-row gap-2 px-16 py-8">
      {!publicQuizzes.data?.length && 'No public quizzes found'}
      {publicQuizzes.data?.map((quiz) => (
        <Link href={`/app/quiz/${quiz.shortId}`} key={quiz.id}>
          <Card>
            <CardTitle className="text-2xl">{quiz.name}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default Home
