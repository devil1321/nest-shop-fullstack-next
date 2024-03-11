'use client'
import React, { useEffect } from 'react'
import Item from './item.component'
import gsap from 'gsap'
import { ScrollTrigger,DrawSVGPlugin } from 'gsap/all'

const Figures = () => {

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.home-figures img',{ opacity:0,y:-20 },{
      opacity:1,
      y:0,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.home-figures',
        start:'+=1200px',
        end:'+=200px'
      }
    })
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className='home-figures px-2 md:px-0 my-12 '>
      <h2 className="font-bold text-2xl my-5">Categories</h2>
      <div className='home-figures-items flex flex-wrap gap-3 justify-center'>
        <Item img="/assets/home/figure-1.svg" title='Milks and Dairies' />
        <Item img="/assets/home/figure-2.svg" title='Wines & Alcohol' />
        <Item img="/assets/home/figure-3.svg" title='Clothing & Beauty' />
        <Item img="/assets/home/figure-4.svg" title='Pet Foods & Toy' />
        <Item img="/assets/home/figure-5.svg" title='Packaged fast food' />
        <Item img="/assets/home/figure-6.svg" title='Baking material' /> 
        <Item img="/assets/home/figure-7.svg" title='Vegetables & tubers' />
        <Item img="/assets/home/figure-8.svg" title='Fresh Seafood' />
      </div>
    </div>
  )
}

export default Figures
