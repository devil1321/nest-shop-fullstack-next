'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Map = () => {

  const [scale,setScale] = useState<number>(1)

  useEffect(()=>{
    if(scale < 1) setScale(1)
    gsap.to('.contact-map img',{scale:scale})
},[scale])

  return (
    <div className='contact-map mt-12 mx-auto relative top-0 left-0 w-[340px] h-[200px] md:w-[650px] md:h-[250px] lg:w-[1150px] lg:h-[300px] xl:w-[1250px] xl:h-[300px] 2xl:w-[1500px] 2xl:h-[450px] overflow-hidden'>
      <Image className='contact-map-image' src="/assets/contact/map.png" alt="map-image" width={1250} height={300} />
      <div className="contact-map-buttons absolute top-0 left-0">
        <button onClick={()=>setScale(scale + 1)} className="block bg-white m-2 h-[40px] w-[40px] shadow-lg shadow-gray-400 hover:bg-green-300 font-bold rounded-md">+</button>
        <button onClick={()=>setScale(scale - 1)} className="block bg-white m-2 h-[40px] w-[40px] shadow-lg shadow-gray-400 hover:bg-green-300 font-bold rounded-md">-</button>
      </div>
    </div>
  )
}

export default Map
