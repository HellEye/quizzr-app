/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormInput, type FormInputProps } from '@ui/form'
import React from 'react'
import { type Control, useForm } from 'react-hook-form'

const FormComponent = (props: { children?: React.ReactNode }) => {
  const form = useForm()
  return <Form {...form}>{props.children}</Form>
}
const FormDecorator = (story: (ctx: any) => any, context: any) => {
  return <FormComponent>{story({ ...context })}</FormComponent>
}
export default {
  title: 'UI/FormInput',
  component: FormInput,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['text', 'password', 'checkbox', 'radio', 'number', 'email', 'tel', 'url'],
    },
  },
  decorators: [FormDecorator],
}

type TestForm = { test: string }
const Template = (
  args: Omit<FormInputProps<TestForm>, 'name'> & { control: Control<TestForm, any> }
) => {
  return <FormInput placeholder="Placeholder" name="test" {...args} />
}

export const Default = Template.bind({} satisfies Omit<FormInputProps<TestForm>, 'name'>)
