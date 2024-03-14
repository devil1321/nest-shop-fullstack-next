'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Count = () => {

  const [years,setYears] = useState<number>(0)
  const [clients,setClients] = useState<number>(0)
  const [complete,setComplete] = useState<number>(0)
  const [advisor,setAdvisor] = useState<number>(0)
  const [sale,setSale] = useState<number>(0)

  const handleCount = (start:number,setState:any,to:number) =>{
    let time = 300
    for(let i = start; i < to; i++){
        setTimeout(() => {
            setState(i)
        }, time += 100);
    }
  }

  useEffect(()=>{
    handleCount(10,setYears,100)
    handleCount(102,setClients,254)
    handleCount(3,setComplete,200)
    handleCount(23,setAdvisor,186)
    handleCount(233,setSale,356)
  },[])

  return (
    <div className='about-solution-count overflow-hidden rounded-lg relative top-0 left-0 mx-auto h-[250px] w-[340px] md:w-[600px] lg:w-[1000px] xl:w-[1260px]'>
      <div className="about-solution-count-overlay-wrapper">
        <div className="about-solution-count-overlay bg-orange-300/50 w-[100%] h-[100%] absolute z-10 top-0 left-0"></div>
        <Image className='absolute top-0 left-0 w-[100%] h-[100%]' src="/assets/about/count-image.png" alt='count-background' width={1366} height={300} />
      </div>
      <div className="about-solution-count-items text-white text-center w-[100%] z-10 absolute top-1/2 -translate-y-1/2 left-0 flex flex-wrap justify-around items-center">
            <div className="about-solution-count-item w-1/5 min-w-fit">
                <h3 className="text-5xl font-bold">{years}+</h3>
                <p className= "text-md">Glorious years</p>
            </div>
            <div className="about-solution-count-item w-1/5 min-w-fit">
                <h3 className="text-5xl font-bold">{clients}+</h3>
                <p className="text-md">Happy clients</p>
            </div>
            <div className="about-solution-count-item w-1/5 min-w-fit">
                <h3 className="text-5xl font-bold">{complete}+</h3>
                <p className="text-md">Projects complete</p>
            </div>
            <div className="about-solution-count-item w-1/5 min-w-fit">
                <h3 className="text-5xl font-bold">{advisor}+</h3>
                <p className="text-md">Team advisor</p>
            </div>
            <div className="solution-count-item w-1/5 min-w-fit">
                <h3 className="text-5xl font-bold">{sale}+</h3>
                <p className="text-md">Products Sale</p>
            </div>
      </div>
    </div>
  )
}

export default Count
