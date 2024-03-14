import React from 'react'
import { AboutComponents } from '../components/about'
import { GlobalComponents } from '../components/global'

const About = () => {
  return (
    <div className='about relative'>
      <AboutComponents.CarouselComponents.Carousel />
      <AboutComponents.ProvideComponents.Provide />
      <AboutComponents.SolutionComponents.Solution />
      <AboutComponents.Count />
      <AboutComponents.TeamComponents.Team />
      <GlobalComponents.Banner 
        img="/assets/about/about-footer.png" 
        heading="Stay home & get your daily needs from our shop" 
        paragraph="Start You'r Daily Shopping with Nest Mart" 
      />
    </div>
  )
}

export default About
