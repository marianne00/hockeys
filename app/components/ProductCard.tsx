import Image from 'next/image'
import { Icon } from '@iconify/react'
import React from 'react'

type Props = {
  name: string,
  image: string,
  description: string,
  price: number,
  rating: number,
  views: number,
  likes: number,
  deliveryFee: number
}

const ProductCard = ({
  name, image, description, price, rating, views, likes
}: Props) => {
  return (
    <div className='flex justify-between p-4 border border-gray-200 rounded-lg'>
      <Image
        src={image}
        alt={name + '-hockeys'}
        width={180}
        height={172}
      />
      <div className='flex flex-col justify-between ml-4'>
        <div className='flex justify-between gap-8'>
            <div className='flex items-center gap-2'>
              <Icon icon='mdi:star-outline' className='text-brand-primary' />
              <span className='text-black-300 text-opacity-60'>{rating}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Icon icon='mdi:heart-outline' className='text-brand-primary' />
              <span className='text-black-300 text-opacity-60'>{likes}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Icon icon='mdi:eye-outline' className='text-brand-primary' />
              <span className='text-black-300 text-opacity-60'>{views}</span>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='title-2'>{name}</span>
          <span className='text-black-300 text-opacity-60'>{description}</span>
        </div>
        <span className='text-brand-primary font-black text-opacity-60'>Price - ${price}</span>
      </div>
    </div>
  )
}

export default ProductCard