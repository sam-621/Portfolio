/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

export const CardBg: FC<Props> = ({ src, alt, hasBlur }) => {
  return (
    <div className="overflow-hidden bg-cards h-full opacity-20 z-40">
      <img
        src={`/img/${src}`}
        alt={alt}
        width="100%"
        className={`rounded ${hasBlur && 'blur'} object-cover h-96`}
      />
    </div>
  )
}

type Props = {
  src: string
  alt: string
  hasBlur?: boolean
}
