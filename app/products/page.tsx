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
        <div className="products-items p-5 flex flex-wrap gap-3">
          {products.map((p:Interfaces.Product) => <GlobalComponents.Product key={`product-key-products-${p.id}`} className='md:w-1/3 xl:min-w-[240px] my-2 xl:w-1/5' product={p} />)}
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
