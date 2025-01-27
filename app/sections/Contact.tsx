import React from 'react'
import Container from '../components/Container'
import SectionHead from '../components/SectionHead'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const Contact = () => {
  return (
    <Container className='pb-16'>
      <SectionHead title='Contact Us' description='Get in touch with us for any inquiries or feedback.' />
      <div className='flex flex-wrap justify-between gap-8 mt-16'>
        <div className='w-1/3 flex flex-col gap-4'>
          <div className='flex flex-col p-8 bg-[color:#BCED6D1A] rounded-lg'>
            <Image src="/phone.png" className='mb-8' alt='phone' width={40} height={40} />
            <span className='mb-2 text-gray-400'>Phone Number:</span>
            <span className='title-2'>+1 234 567 890</span>
          </div>
          <div className='flex flex-col p-8 bg-[color:#FDDD5F1A] rounded-lg'>
            <Image src="/email.png" className='mb-8' alt='email' width={40} height={40} />
            <span className='mb-2 text-gray-400'>Email Address:</span>
            <span className='title-2'>
              support@hockeys.com
            </span>
          </div>
          <div className='flex flex-col p-8 bg-[color:#629CF31A] rounded-lg'>
            <Image src="/maps.png" className='mb-8' alt='location' width={40} height={40} />
            <span className='mb-2 text-gray-400'>Location:</span>
            <span className='title-2'>
              1234 Main Street, New York, NY 10001
            </span>
          </div>
        </div>

        <form className='flex-grow'>
          <div className='grid grid-cols-2 justify-between gap-4'>
            <div className='mb-4'>
              <label className='block mb-2 font-extrabold text-black-400'>Name</label>
              <input type='text' placeholder='Name' className='input' />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 font-extrabold text-black-400'>Email</label>
              <input type='email' placeholder='Email' className='input' />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 font-extrabold text-black-400'>Subject</label>
              <input type='text' placeholder='Subject' className='input' />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 font-extrabold text-black-400'>Phone</label>
              <input type='tel' placeholder='Phone' className='input' />
            </div>
          </div>
          <div className='mb-4 mt-4'>
            <label className='block mb-2 font-extrabold text-black-400'>Message</label>
            <textarea placeholder='Message' className='input h-[337px]'></textarea>
          </div>
          <button className='w-full btn'>Send Message</button>
        </form>

        <div className='flex flex-col items-center w-full p-8 bg-gray-100 rounded-lg'>
          <span className='title-2'>Social Media</span>
          <div className='flex gap-2 mt-2'>
            <Icon icon='akar-icons:facebook-fill' className='text-2xl text-black-600 mx-2 cursor-pointer' />
            <Icon icon='akar-icons:twitter-fill' className='text-2xl text-black-600 mx-2 cursor-pointer' />
            <Icon icon='akar-icons:instagram-fill' className='text-2xl text-black-600 mx-2 cursor-pointer' />
            <Icon icon='akar-icons:youtube-fill' className='text-2xl text-black-600 mx-2 cursor-pointer' />
          </div>
        </div>

      </div>
    </Container>
  )
}

export default Contact