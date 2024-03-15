'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

interface BannerProps{
    img:string;
    heading:string;
    paragraph:string;
    isNeedFix?:boolean;
}

const Banner:React.FC<BannerProps> = ({img,heading,paragraph,isNeedFix}) => {

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    if(!isNeedFix){

      gsap.fromTo('.banner-details h2',{ x:500, opacity:0 },{ 
        x:0, 
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:'.banner',
        start:'-=100px',
        end:"+=100px",
    }})
    gsap.fromTo('.banner-details p',{ opacity:0 },{ 
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:'.banner',
        start:'-=100px',
        end:"+=100px",
    }})
    gsap.fromTo('.banner-details button',{ x:-240 },{ 
      x:0,
      duration:1,
      scrollTrigger:{
        trigger:'.banner',
        start:'-=100px',
        end:"+=100px",
    }})
    gsap.fromTo('.banner-details input',{ opacity:0 },{
      opacity:1,
      scrollTrigger:{
        trigger:'.banner',
        start:'-=100px',
        end:"+=100px",
      }})
    }else{
      gsap.fromTo('.banner-details h2',{ x:500, opacity:0 },{ 
        x:0, 
        opacity:1,
        duration:1,
        scrollTrigger:{
          trigger:'.banner',
          start:'+=1800px',
          end:"+=1800px",
      }})
      gsap.fromTo('.banner-details p',{ opacity:0 },{ 
        opacity:1,
        duration:1,
        scrollTrigger:{
          trigger:'.banner',
          start:'+=1800px',
          end:"+=1800px",
      }})
      gsap.fromTo('.banner-details button',{ x:-240 },{ 
        x:0,
        duration:1,
        scrollTrigger:{
          trigger:'.banner',
          start:'+=1800px',
          end:"+=1800px",
      }})
      gsap.fromTo('.banner-details input',{ opacity:0 },{
        opacity:1,
        scrollTrigger:{
          trigger:'.banner',
          start:'+=1800px',
          end:"+=1800px",
      }})
    }
  }

  useEffect(()=>{
    handleAnimate()    
  },[])

  return (
    <div className='banner my-12 relative top-0 xl:min-w-[1000px] xl:h-[300px] rounded-lg overflow-hidden'>
      <Image className='absolute top-0 left-0 w-[100%} h-[100%]' src={img} alt='banner-image' width={1300} height={400} />
      <div className="banner-details absolute top-24 left-10">
        <h2 className="text-4xl font-bold w-2/3 my-2">{heading}</h2>
        <p className="text-md">{paragraph}</p>
        <div className="banner-field rounded-full my-4 bg-white w-fit">
            <form action="" className='flex items-center'>
                <input className='ml-5 opacity-0' type="text" placeholder='Your emaill address'/>
                <button className='rounded-full bg-green-500 font-bold text-white py-2 px-6'>Subscribe</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Banner
