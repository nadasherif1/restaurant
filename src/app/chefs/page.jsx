import Chefs from '@/components/chefs/Chefs'
import HeroSection from '@/components/chefs/HeroSection'
import Testimonial from '@/components/chefs/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Chefs/>
      <Testimonial/>
    </div>
  )
}

export default page