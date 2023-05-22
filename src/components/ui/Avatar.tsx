import React, { forwardRef } from 'react'
import { default as NextImage, type ImageProps } from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  url?: string | null
  className?: string
  width?: number
  height?: number
}

const Avatar = forwardRef<HTMLImageElement, Props>(function Image(
  { url, className, width = 48, height = 48, ...rest }: Props,
  ref
) {
  return (
    <NextImage
      className={twMerge('rounded-full', className)}
      src={url || '/favicon.ico'}
      width={width}
      height={height}
      alt="avatar"
      ref={ref}
      {...rest}
    />
  )
})

export default Avatar
