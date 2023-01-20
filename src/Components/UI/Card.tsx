import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const classes = cva('w-full rounded-md bg-bgColor-400 px-16 py-8', {
  variants: {
    shadow: {
      true: ['shadow-0lg', 'shadow-accent-900'],
    },
  },
  defaultVariants: {
    shadow: true,
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof classes> {}

const Card = ({ children, className, shadow, ...rest }: CardProps) => {
  return (
    <section className={classes({ shadow, class: className })} {...rest}>
      {children}
    </section>
  )
}

export default Card
