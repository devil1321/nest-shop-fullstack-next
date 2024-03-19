'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import { GlobalComponents } from '../components/global'
import * as Interfaces from '@/app/controller/interfaces'

const Products = () => {

  const { products } = useSelector((state:State) => state.api)

  return (
    <div className='products'>
      <GlobalComponents.Path paths={['Shop']}/>
      <div className="products-inner md:flex md:justify-between md:items-start">
        <GlobalComponents.SidebarComponents.FullSidebar />
        <div className="products-items p-5 flex flex-wrap">
          {products.map((p:Interfaces.Product) => <GlobalComponents.Product className='md:w-1/2 lg:w-1/4' product={p} />)}
        </div>
      </div>
      <GlobalComponents.Banner 
        img="/assets/home/footer-img.png" 
        heading="Stay home & get your daily needs from our shop" 
        paragraph="Start You'r Daily Shopping with Nest Mart" 
      />
    </div>
  )
}

export default Products
