'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import { GlobalComponents } from '../global'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Products = () => {

  const { products } = useSelector((state:State) => state.api)

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.product',{y:-50,opacity:0},{y:0,opacity:1,stagger:0.5,scrollTrigger:{
      trigger:'.home-products',
      scrub:6,
      start:'-=100px',
      end:'+=100px',
    }})
  }

  useEffect(()=>{
    handleAnimate()
  },[products])

  return (
    <div className='home-products flex justify-center md:justify-start gap-3 flex-wrap'>
      {products.map((p:any)=> <GlobalComponents.Product key={`home-product-${p.id}`} className="md:w-1/3 xl:min-w-[240px] my-2 xl:w-1/5" product={p} />)}
    </div>
  )
}

export default Products
