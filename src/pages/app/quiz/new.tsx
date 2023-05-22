import { Form, FormInput } from '@ui/form'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { QuizBase } from '@/server/api/validators/quiz'
import { Button } from '@ui/button'
import { api } from '@/utils/api'
import { useRouter } from 'next/router'

const NewQuiz = () => {
  const createQuiz = api.quiz.create.useMutation()
  const form = useForm<z.infer<typeof QuizBase>>({
    resolver: zodResolver(QuizBase),

    defaultValues: {
      name: '',
      description: '',
      public: false,
    },
  })
  const router = useRouter()
  const onSubmit: SubmitHandler<z.infer<typeof QuizBase>> = (data) => {
    console.log(data)
    createQuiz.mutate(data, {
      onSuccess: (data) => {
        void router.push(`/app/quiz/${data.shortId}`)
      },
    })
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-6/12 max-w-xl flex-col gap-4 px-8 py-4">
        <h2 className="text-xl">Create a new Quiz</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput rules={{ required: true }} control={form.control} name="name" label="Name" />
            <FormInput control={form.control} multiline name="description" label="Description" />
            <FormInput control={form.control} name="public" label="Public" type="checkbox" />
            <Button type="submit">Create Quiz</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default NewQuiz
