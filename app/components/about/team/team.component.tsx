'use client'
import React, { useEffect } from 'react'
import Details from './details.component'
import Item from './item.component'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Team = () => {

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    tl.fromTo('.about-teams-details',{y:-50,opacity:0},{y:0,opacity:1,scrollTrigger:{
        trigger:'.about-teams-details',
        scrub:6,
        start:'-=100px',
        end:'+=50px',
    }})
    tl.fromTo('.about-teams-item-image',{y:100,opacity:0},{y:0,opacity:1,scrollTrigger:{
        trigger:'.about-teams-item-image',
        scrub:6,
        start:'-=100px',
        end:'+=50px',
    }})
    tl.fromTo('.about-teams-item-details',{y:-100,opacity:0},{y:0,opacity:1,scrollTrigger:{
        trigger:'.about-teams-item-image',
        scrub:6,
        start:'-=100px',
        end:'+=50px',
    }})
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className='about-team my-12 md:flex md:justify-between md:items-start gap-10'>
      <Details />
      <Item img='/assets/about/team-1.png' name='H. Merinda' position='CEO & Co-Founder' />
      <Item img='/assets/about/team-2.png' name='Dilan Specter' position='Head Engineer' />
    </div>
  )
}

export default Team
