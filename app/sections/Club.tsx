import React from 'react'
import Container from '../components/Container'
import PercentageCard from "../components/PercentageCard";
import SectionHead from "../components/SectionHead";

const Club = () => {
  return (
    <Container>
      <SectionHead
        title="Professional Hockeys Club"
        description="Join us for the best hockey experience of your life. We have the best players, the best coaches, and the best fans. You won't regret it!"
      />
      <div className='flex justify-between items-center flex-wrap py-8'>
      <PercentageCard
        pathPercentageColor="#FF4240"
        trailColor="#E7E7E8"
        percentage={87}
        title="Player Facilities"
        description="Amet consectetur. Condimentum dignissim adipiscing."
      />
      <PercentageCard
        pathPercentageColor="#49D293"
        trailColor="#E7E7E8"
        percentage={95}
        title="Experienced Coaches"
        description="Amet consectetur. Condimentum dignissim adipiscing."
      />
      <PercentageCard
        pathPercentageColor="#FFB546"
        trailColor="#E7E7E8"
        percentage={90}
        title="Senior Players "
        description="Amet consectetur. Condimentum dignissim adipiscing."
      />
      <PercentageCard
        pathPercentageColor="#4C8DF1"
        trailColor="#E7E7E8"
        percentage={90}
        title="Training Ground"
        description="Amet consectetur. Condimentum dignissim adipiscing."
      />
      </div>
    </Container>
  )
}

export default Club