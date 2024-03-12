'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import * as UIActionCreators from '@/app/controller/action-creators/ui.action-creators'
import { bindActionCreators } from 'redux';

interface DetailsProps{
    title:string;
    paragraph_1:string;
    paragraph_2:string;
}

const Details:React.FC<DetailsProps> = ({title,paragraph_1,paragraph_2}) => {

  const dispatch = useDispatch()
  const UIActions = bindActionCreators(UIActionCreators,dispatch)

  const [count,setCount] = useState<number>(1)

  const handleInitSelect = () =>{
    const items = document.querySelectorAll('.about-carousel-sm-item-wrapper') as NodeListOf<HTMLDivElement>
    items[0].classList.add('border-green-300')
  }

  const handleSelect = () =>{
    const items = document.querySelectorAll('.about-carousel-sm-item-wrapper') as NodeListOf<HTMLDivElement>
    items.forEach(i => {
      i.classList.remove('border-green-300')
    })
    items[count - 1].classList.add('border-green-300')
  }

  const handleNext = () =>{
    if(count < 4){
      setCount(count + 1)
    }else{
      setCount(1)
    }
  }
  const handlePrev = () =>{
    if(count < 2){
      setCount(4)
    }else{
      setCount(count - 1)
    }
  }

  useEffect(()=>{
    handleInitSelect()
  },[])

  useEffect(()=>{
    UIActions.setAboutCarouselImageSrc(`/assets/about/carousel-${count}.png`)
    handleSelect()
  },[count])

  return (
    <div className='about-carousel-details md:w-1/2 order-1 md:order-2'>
      <h3 className="px-4 md:px-0 text-3xl font-bold">{title}</h3>
      <p className="px-4 md:px-0 text-sm text-gray-500 my-2">{paragraph_1}</p>
      <p className="px-4 md:px-0 text-sm text-gray-500 my-2">{paragraph_2}</p>
      <div className="about-carousel-items-wrapper relative top-0 left-0">
        <div className="about-carousel-items-controls w-[95%] absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex justify-between items-center">
          <div onClick={()=>{
            handlePrev()
            }} className="about-carousel-item-prev transition-all px-3 py-1 cursor-pointer bg-green-300 opacity-70 hover:bg-green-500 hover:opacity-100 rounded-full text-white font-bold text-lg">&lt;</div> 
          <div onClick={()=>{
            handleNext()
            }} className="about-carousel-item-prev transition-all px-3 py-1 cursor-pointer bg-green-300 opacity-70 hover:bg-green-500 hover:opacity-100 rounded-full text-white font-bold text-lg">&gt;</div> 
        </div>
        <div className="about-carousel-items flex flex-wrap md:flex-nowrap gap-3 justify-center">
            {Array.from(Array(4).keys()).map((k:number) => <div className='about-carousel-sm-item-wrapper md:h-[50px] lg:h-[100%] overflow-hidden p-1 border-[2px] overflow-hidden'>
                                                              <div 
                                                                key={`carousel-item-${k}`} 
                                                                onClick={()=>UIActions.setAboutCarouselImageSrc(`/assets/about/carousel-${k+1}.png`)} 
                                                                className='about-carousel-sm-item overflow-hidden md:h-[50px] xl:h-[75px] cursor-pointer'
                                                              >
                                                                <Image src={`/assets/about/carousel-${k+1}.png`} alt='carousel-item-image' width={150} height={100} />
                                                              </div>
                                                          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Details
