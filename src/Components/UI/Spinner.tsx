import React from 'react'
import { twMerge } from 'tailwind-merge'

const Spinner = ({ className, dur = '0.6s' }: { className?: string; dur?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={twMerge('h-8 w-8 fill-text-300', className)}>
      <path d="M2,12A10.94,10.94,0,0,1,5,4.65c-.21-.19-.42-.36-.62-.55h0A11,11,0,0,0,12,23c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur={dur}
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default Spinner
