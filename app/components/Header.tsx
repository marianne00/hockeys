import React from 'react'
import Container from './Container'
import Link from 'next/link'
import HockeysLogo from '@/public/hockeys.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <Container>
      <header className="flex justify-between items-center py-10">
        <Link className="text-lg" href="/">
          <Image src={HockeysLogo} alt="Hockeys" width={200} height={50} />
        </Link>
        <div className='flex space-x-8'>
          <Link className="text-lg" href="/">
            Home
          </Link>
          <Link className="text-lg" href="/pages">
            Pages
          </Link>
          <Link className="text-lg" href="/about">
            About
          </Link>
          <Link className="text-lg" href="/blog">
            Blog
          </Link>
          <Link className="text-lg" href="/contact">
            Contact
          </Link>
        </div>
        <Link className='btn btn-primary text-lg' href="/tickets">
          Get Tickets
        </Link>
      </header>
    </Container>
  )
}

export default Header