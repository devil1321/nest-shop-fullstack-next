'use client'
import React from 'react'
import Item from './item.component'
import gsap from 'gsap'

const Carousel = () => {

  const handleAnimate = (tl:any) =>{
    tl.from('.home-carousel-item-details h2',{ x:500, opacity:0 })
    tl.from('.home-carousel-item-details p',{ opacity:0 })
    tl.from('.home-carousel-item-details button',{ x:-240 })
    tl.fromTo('.home-carousel-item-details input',{ opacity:0 },{opacity:1})
  }

  const handlePrev = () =>{
    const tl = gsap.timeline()
    tl.to('.home-carousel-items',{translateX:'0%',duration:1})
    handleAnimate(tl)
  }
  const handleNext = () =>{
    const tl = gsap.timeline()
    tl.to('.home-carousel-items',{translateX:'-50%',duration:1})
    handleAnimate(tl)
  }


  return (
    <div className='home-carousel overflow-hidden rounded-[25px] relative top-0 left-0'>
      <div className='home-carousel-buttons absolute top-1/2 left-1/2 w-[99%] z-10 -translate-y-1/2 -translate-x-1/2 flex justify-between items-center'>
        <div onClick={()=>handlePrev()} className='px-4 py-2 bg-white opacity-50 hover:opacity-100 cursor-pointer rounded-full'>&lt;</div>
        <div onClick={()=>handleNext()} className='px-4 py-2 bg-white opacity-50 hover:opacity-100 cursor-pointer rounded-full'>&gt;</div>
      </div>
      <div className="home-carousel-items flex w-max">
        <Item img='/assets/home/hero.png' heading='Don`t miss amazing grocery deals' paragraph='Sign up for the daily newsletter' />
        <Item img='/assets/home/hero-2.png' heading='Fresh Vegetables Big discount' paragraph='Save up to 50% off on your first order' />
      </div>
    </div>
  )
}

export default Carousel
