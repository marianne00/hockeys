'use client'

import React, { useState } from 'react'

type Props = {
  title: string,
  children: React.ReactNode
}

const Accordion = ({ title, children }: Props) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <div onClick={() => setExpanded(!expanded)} className='mb-2 cursor-pointer overflow-hidden'>
      <div className='flex justify-between items-center border-b border-gray-200 p-4'>
        <span className='title-2'>{title}</span>
        <span className='text-black-300 text-opacity-60'>+</span>
      </div>
      <div className={`px-4 transition-all duration-300 ${expanded ? 'max-h-[200px] py-4' : 'max-h-0'} overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}

export default Accordion