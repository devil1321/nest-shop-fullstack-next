'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as Interfaces from '@/app/controller/interfaces'
import Nav from './nav.component'
import Item from './item.component'

const ProductsInner = () => {

  const { products } = useSelector((state:State)=>state.api)

  return (
    <div className='home-products-inner'>
      <Nav />
      <div className="home-products-items md:flex md:flex-wrap md:justify-between md:items-center py-10">
        {products.slice(0,9).map((p:Interfaces.Product)=><Item key={`home-products-inner-${p.id}`} product={p} />)}
      </div>
    </div>
  )
}

export default ProductsInner
