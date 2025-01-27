import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  image: string,
  title: string,
  description: string
  cta: string,
  ctaLink: string
  className?: string
}

const ImageCard = ({ image, title, description, cta, ctaLink, className }: Props) => {
  return (
    <div className={`relative flex flex-col justify-end p-8 ${className}`}>
      <Image
        src={image}
        className='absolute top-0 left-0  w-full h-full object-cover rounded-lg'
        alt={title}
        width={1000}
        height={300}
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black-900 opacity-[.5] rounded-lg'></div>
      <div className='relative max-w-[520px] h-full z-1 text-left rounded-lg'>
        <h3 className='h3 text-white mb-3'>{title}</h3>
        <p className='text-white mb-6'>{description}</p>
        <Link href={ctaLink} className='btn btn-primary'>{cta}</Link>
      </div>
    </div>
  )
}

export default ImageCard