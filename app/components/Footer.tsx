import React from 'react'
import Container from './Container'
import { Icon } from '@iconify/react/dist/iconify.js'


const Footer = () => {
  return (
    <footer className='bg-[color:#131318] py-16'>
      <Container className='bg-[color:#131318] text-white'>
        <div className='w-full flex justify-between gap-8'>
            <div className='flex flex-col gap-4'>
              <span className='text-2xl font-bold'>Get In Touch</span>
              <span className='text-white text-opacity-60 max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                bibendum laoreet.</span>
                <div className='flex items-center gap-4 text-brand-primary text-opacity-60'>
                  <Icon icon='mdi:mail' className='text-brand-primary text-opacity-60' />
                  support@hockeys.com
                </div>
                <div className='flex items-center gap-4 text-brand-primary text-opacity-60'>
                  <Icon icon='mdi:phone' className='text-brand-primary text-opacity-60' />
                  +1 234 567 890
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='text-xl font-bold'>Company</span>
                <a href='#' className='text-white text-opacity-60'>Leadership</a>
                <a href='#' className='text-white text-opacity-60'>About Us</a>
                <a href='#' className='text-white text-opacity-60'>Careers</a>
                <a href='#' className='text-white text-opacity-60'>News and Articles</a>
                <a href='#' className='text-white text-opacity-60'>Legal Notice</a>
            </div>
            <div className='flex flex-col gap-4'>
              <span className='text-xl font-bold'>Support</span>
              <span className='text-white text-opacity-60'>Help Center</span>
              <span className='text-white text-opacity-60'>FAQ</span>
              <span className='text-white text-opacity-60'>Ticket Support</span>
              <span className='text-white text-opacity-60'>Contact Us</span>
            </div>
            <div className='flex flex-col gap-4'>
              <span className='text-xl font-bold'>Services</span>
              <div className='flex flex-col gap-4'>
                <a href='#' className='text-white text-opacity-60'>Academy</a>
                <a href='#' className='text-white text-opacity-60'>Group Lesson</a>
                <a href='#' className='text-white text-opacity-60'>Private Lesson</a>
                <a href='#' className='text-white text-opacity-60'>Hockeys for adults</a>
                <a href='#' className='text-white text-opacity-60'>Hockeys for kids</a>
              </div>
            </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer