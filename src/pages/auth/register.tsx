import { Button } from '@ui/button'
import { Input } from '@ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}
const Page = () => {
  const { register, handleSubmit: _handleSubmit } = useForm<Inputs>()
  // const registerMutation = api.auth.register.useMutation()
  // const onSubmit = (data: Inputs) => registerMutation.mutate(data)
  return (
    <div className="flex flex-col p-32">
      <div className="rounded-md border border-indigo-400 px-64 py-16">
        <form
          className="flex w-64 max-w-md flex-col items-center gap-4"
          // onSubmit={void handleSubmit(onSubmit)}
        >
          <h1 className="text-xl font-bold">Register</h1>
          <Input label="Email" type="email" {...register('email', { required: true })} />
          <Input label="Password" type="password" {...register('password', { required: true })} />
          <Button className="w-32" type="submit">
            Register
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Page
