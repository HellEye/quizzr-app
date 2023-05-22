import { cva, type VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import { forwardRef } from 'react'

const linkVariants = cva('text-text-300 hover:text-text-400', {
  variants: {
    size: {
      default: 'text-md',
      sm: 'text-sm',
      lg: 'text-lg',
    },
    variant: {
      default: '',
      button:
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    },
    color: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'underline-offset-4 hover:underline text-primary',
      accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
    },
  },
  compoundVariants: [
    {
      variant: 'button',
      size: 'default',
      className: 'h-10 py-2 px-4',
    },
    {
      variant: 'button',
      size: 'lg',
      className: 'h-11 px-8 rounded-md',
    },
    { variant: 'button', size: 'sm', className: 'h-9 px-3 rounded-md' },
  ],

  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
})
export type LinkProps = React.ComponentProps<typeof NextLink> & VariantProps<typeof linkVariants>

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, color, ...props }, ref) => {
    return (
      <NextLink
        className={linkVariants({
          className,
          variant,
          size,
          color: variant === 'button' && !color ? 'default' : color,
        })}
        {...props}
        ref={ref}
      />
    )
  }
)
Link.displayName = 'Link'

export { Link, linkVariants }
