import React from 'react'

type Props = {
  children: React.ReactNode,
  className?: string
}

const Container = ({ children, className }: Props) => {

  return (
    <div className={`max-w-[1170px] mx-auto px-4 bg-white ${className}`}>
      {children}
    </div>
  )
}

export default Container