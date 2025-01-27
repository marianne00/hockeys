'use client'
import { useRef } from 'react';
import Image from 'next/image';
import Container from './Container'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const Carousel = () => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <Container className='py-2 pb-12'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        <SwiperSlide className='relative !h-auto'>
          <Image
            src='/trophy.png'
            className='w-full h-full absolute top-0 left-0 z-[-1]'
            alt='trophy'
            width={1170}
            height={550} />
            <div className='absolute bottom-[32px] right-[32px] w-1/2 p-8 text-white bg-black-300 rounded-lg'>
              <h5 className='title mb-4'>Meet all the heroes from the field</h5>
              <p>Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat dolor. Purus urna in sit nullam proin. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative !h-auto'>
          <Image src='/trophy.png' alt='trophy' width={1170} height={550} />
        </SwiperSlide>

      </Swiper>
      <div className='flex space-xt-4 mt-4'>
        <button ref={navigationPrevRef} className='w-[40px] h-[40px] flex justify-center items-center bg-black-300 rounded-full prev'>
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 16.5L1.25 9L8.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button ref={navigationNextRef} className='w-[40px] h-[40px] flex justify-center items-center bg-black-300 rounded-full next'>
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 1.5L8.75 9L1.25 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </Container>
  )
}

export default Carousel