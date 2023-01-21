import { cva, type VariantProps } from 'class-variance-authority'
import React, { type ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof classes>['variant']
}

const classes = cva('rounded-md px-4 py-2', {
  variants: {
    variant: {
      primary: 'bg-indigo-500 text-white',
      secondary: 'bg-indigo-200 text-indigo-500',
    },
  },
})

export const Button = ({ className, variant = 'primary', ...props }: Props) => {
  return <button className={classes({ className, variant })} {...props} />
}
