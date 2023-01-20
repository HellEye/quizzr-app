import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props {
  url?: string | null
  className?: string
  width?: number
  height?: number
}

const Avatar = ({ url, className, width = 48, height = 48 }: Props) => {
  return (
    <Image
      className={twMerge('rounded-full', className)}
      src={url || '/favicon.ico'}
      width={width}
      height={height}
      alt="avatar"
    />
  )
}

export default Avatar
