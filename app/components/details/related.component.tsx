'use client'
import { State } from '@/app/controller/reducers/root.reducer'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as Interfaces from '@/app/controller/interfaces'
import { GlobalComponents } from '../global'

const Related = () => {

  const { products } = useSelector((state:State) => state.api)
  const [shuffled,setShuffled] = useState<Interfaces.Product[]>([])

  const handleShuffle = () =>{
    const max = products.length
    const min = 4
    const slice = Math.random() * (max - min) + min;
    if(slice === min){
      setShuffled(products.slice(0,slice))
    }else{
      setShuffled(products.slice(slice - 4,slice))
    }
  }

  useEffect(()=>{
    handleShuffle()
  },[products])

  return (
    <div className='details-related'>
      <h3 className="details-related-title text-md font-bold">Related products</h3>
      <div className="details-related-inner flex flex-wrap justify-start items-start gap-3">
        {shuffled.map((p:Interfaces.Product) => <GlobalComponents.Product className='md:w-1/3 xl:min-w-[240px] my-2 xl:w-1/5' key={`details-realted-product-key-${p.id}`} product={p} />)}
      </div>
    </div>
  )
}

export default Related
