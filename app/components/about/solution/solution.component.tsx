'use client'
import React, { useEffect } from 'react'
import SolutionImage from './image.component'
import Details from './details.component'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Solution = () => {

  const handleAnimate = () =>{
    ScrollTrigger.refresh()
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    tl.fromTo(".about-solution-image",{ opacity:0 },{ opacity:1,scrollTrigger:{
        trigger:'.about-solution-image',
        start:'-=350px',
        end:"-250px",
        scrub:6,
    }})
    tl.fromTo('.about-solution-details h3',{ x:1000, opacity:0 },{ x:0,opacity:1,scrollTrigger:{
        trigger:'.about-solution-details',
        start:'-=350px',
        end:"-=250px",
        scrub:6,
    }})
    tl.fromTo('.about-solution-details p',{ x:1000, opacity:0 },{ x:0,opacity:1,stagger:0.2,scrollTrigger:{
        trigger:'.about-solution-details',
        start:'-=350px',
        end:"-=250px",
        scrub:6,
    }})
  }


  useEffect(()=>{
    handleAnimate()
  },[])
  

  return (
    <div className='about-solution my-12 md:flex md:justify-center md:items-center'>
      <SolutionImage />
      <Details />
    </div>
  )
}

export default Solution
