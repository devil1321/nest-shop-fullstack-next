'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import { GlobalComponents } from '../global'

const Products = () => {

  const { products } = useSelector((state:State) => state.shop)

  return (
    <div className='home-products flex gap-5 flex-wrap'>
      {products.map((p:any)=> <GlobalComponents.Product className="md:w-1/3 xl:min-w-[240px] my-2 xl:w-1/5" product={p} />)}
    </div>
  )
}

export default Products
