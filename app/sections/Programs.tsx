import React from 'react'
import Container from '../components/Container'
import SectionHead from '../components/SectionHead'
import ImageCard from '../components/ImageCard'


const Programs = () => {
  return (
    <Container>
      <SectionHead
        title="Program Sections"
        description="We have a variety of programs for all ages and skill levels. Whether you're a beginner or a pro, we have something for you!"
      />
      <div className='flex justify-between items-center flex-wrap py-16'>
        <ImageCard
          image='/program-1.png'
          title='Kids Program'
          description='Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna. Id et sed euismod natoque amet nunc morbi nulla. Tortor congue sed et in.'
          cta='Learn More'
          ctaLink='/kids'
          className='w-[49%] min-h-[340px]'
        />
        <ImageCard
          image='/program-2.png'
          title='Kids Program'
          description='Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna. Id et sed euismod natoque amet nunc morbi nulla. Tortor congue sed et in.'
          cta='Learn More'
          ctaLink='/kids'
          className='w-[49%] min-h-[340px]'
        />
        <ImageCard
          image='/program-3.png'
          title='Kids Program'
          description='Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna. Id et sed euismod natoque amet nunc morbi nulla. Tortor congue sed et in.'
          cta='Learn More'
          ctaLink='/kids'
          className='w-full mt-4 min-h-[450px]'
        />
      </div>
    </Container>
  )
}

export default Programs