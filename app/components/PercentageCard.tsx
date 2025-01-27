'use client'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
  pathPercentageColor: string,
  trailColor: string
  percentage: number,
  title: string,
  description: string,
}

const PercentageCard = ({ pathPercentageColor, trailColor, percentage, title, description }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center p-8 max-w-[250px]'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: pathPercentageColor,
          trailColor: trailColor,
          textColor: '#131318'
        })}
        counterClockwise
      />
      <h3 className='h3 mt-4 text-center'>{title}</h3>
      <p className='text-black-300 text-opacity-60 text-center mt-2'>{description}</p>
    </div>
  )
}

export default PercentageCard