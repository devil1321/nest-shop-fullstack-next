'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import Item from './item.component'

const Deals = () => {

  const { products } = useSelector((state:State) => state.api)

  const handleDate = (i:number) =>{
    const months = ['July','August','June','May']
    const date = new Date(`${months[i]} ${(i + 1) * 4}, 2024`)
    return date
  }

  return (
  <div className="home-deals my-12">
    <h2 className="mb-5 text-3xl font-bold">Deals Of The Day</h2>
    <div className='flex justify-center flex-wrap xl:flex-nowrap xl:gap-3'>
      {products.slice(0,4).map((p:any,i:number) => <Item
                                                      key={`deals-${i}`} 
                                                      toDate={handleDate(i)} 
                                                      img={`/assets/home/countdown-bg-${i+1}.png`} 
                                                      product={p} 
                                                      />)}
    </div>
  </div>
  )
}

export default Deals
