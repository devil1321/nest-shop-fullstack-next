'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import * as Interfaces from '@/app/controller/interfaces'

interface ItemProps{
  img:string;
  toDate:any;
  product:Interfaces.Product
}

const Item:React.FC<ItemProps> = ({img,toDate,product}) => {

    const [days,setDays] = useState<number>(0)
    const [hours,setHours] = useState<number>(0)
    const [minutes,setMinutes] = useState<number>(0)
    const [seconds,setSeconds] = useState<number>(0)

    const handleCountDown = () =>{
     var x = setInterval(function() {
         var now = new Date().getTime();
         var distance = toDate - now;
         setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
         setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
         setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
         setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        },1000)
    }

  useEffect(()=>{
    handleCountDown()
  },[])

  return (
    <div className='home-countdown-item relative md:w-1/2 xl:w-1/4 top-0 left-0'>
      <div className="home-countdown-intro relative top-0 left-0 w-[100%] h-[200px]">
        <Image className='absolute top-0 left-0 w-[100%] h-[100%]' src={img} alt="countdown-background" width={300} height={200} />
        <div className="home-countdown-counts relative z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center gap-3">
          <div className='p-1 rounded-md bg-white text-center text-md'>
            <p className='font-bold'>{days}</p>
            <p className="text-md text-gray-400">Days</p>
          </div>
          <div className='p-1 rounded-md bg-white text-center text-md'>
            <p className='font-bold'>{hours}</p>
            <p className="text-md text-gray-400">Hours</p>
          </div>
          <div className='p-1 rounded-md bg-white text-center text-md'>
            <p className='font-bold'>{minutes}</p>
            <p className="text-md text-gray-400">Min</p>
          </div>
          <div className='p-1 rounded-md bg-white text-center text-md'>
            <p className='font-bold'>{seconds}</p>
            <p className="text-md text-gray-400">Sec</p>
          </div>
        </div>
      </div>
      <div className="home-countdown-details rounded-md bg-white p-2 shadow-lg shadow-gray-300 h-[180px] w-[90%] relative -top-16 left-1/2 -translate-x-1/2">
        <h3 className="px-2 text-sm font-bold">{product.title}</h3>
        <p className=" px-2 text-sm text-gray-500">{product.category === 1 ? "Snack" : product.category === 2 ? "Organic" : product.category === 3  ? "Vege" : null}</p>
        <p className="text-yellow-600 px-2 text-sm">&#9734;{product.rating}</p>
        <p className=" px-2 text-sm text-green-500">{product.company}</p>
        <div className="product-price flex items-center my-2">
          <p className="text-green-300 px-2 text-md font-bold">${product.price}</p>
          <p className="text-green-300 px-2 text-md line-through font-bold">${product.prevPrice}</p>
          <button className={`text-green-300 border-[1px] border-green-300 px-2 py-1 rounded-md hover:bg-green-300 hover:text-white transition-all ${product.inCart && 'text-white bg-green-300'}`}>{product.inCart ? "In Cart" : 'Add'}</button>
        </div>
      </div>
    </div>
  )
}

export default Item
