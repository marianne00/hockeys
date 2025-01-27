import React from 'react'
import Container from '../components/Container'
import SectionHead from '../components/SectionHead'
import Image from 'next/image'
import Accordion from '../components/Accordion'
import inquiries from '../data/inquiries.json'

const Inquiries = () => {
  return (
    <Container className='pb-16'>
      <SectionHead
        title="Client's Question"
        description="Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat dolor. Purus urna in sit nullam proin. "
      />
      <div className='flex justify-between gap-8 border border-gray-200 rounded-2xl p-8 mt-16'>
        <Image src="/inquiries.png" className='w-1/2' alt="inquiries" width={100} height={400} />
        <div className='flex flex-grow flex-col'>
          {
            inquiries?.inquiries.map((inquiry, index) => (
              <Accordion key={index} title={inquiry.title}>
                <p>
                  {inquiry.description}
                </p>
              </Accordion>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default Inquiries