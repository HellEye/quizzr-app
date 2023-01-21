import { cva, type VariantProps } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'
import React, { forwardRef } from 'react'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'> & {
  label?: string
  labelClassName?: string
  variant?: VariantProps<typeof inputClasses>['variant']
}
const inputClasses = cva('', {
  variants: {
    variant: {
      base: 'border border-indigo-500 bg-gray-600 text-gray-200 px-4 py-2 rounded-md',
    },
  },
})
const labelClasses = cva('', {
  variants: {
    variant: {
      base: 'text-gray-200',
    },
  },
})
const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, labelClassName, variant = 'base', label, id, ...props },
  ref
) {
  if (!id) id = props.name
  return (
    <>
      {label && (
        <label className={labelClasses({ className: labelClassName, variant })} htmlFor={id}>
          {label}
        </label>
      )}
      <input ref={ref} className={inputClasses({ className, variant })} id={id} {...props} />
    </>
  )
})

export default Input
