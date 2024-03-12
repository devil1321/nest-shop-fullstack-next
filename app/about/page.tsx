import React from 'react'
import { AboutComponents } from '../components/about'

const About = () => {
  return (
    <div className='about'>
      <AboutComponents.CarouselComponents.Carousel />
      <AboutComponents.ProvideComponents.Provide />
    </div>
  )
}

export default About
