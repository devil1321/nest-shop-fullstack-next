'use client'
import React from 'react'
import { GlobalComponents } from '../components/global'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import * as Interfaces from '@/app/controller/interfaces'
import { CartComponents } from '../components/cart'

const Cart = () => {

  const { products } = useSelector((state:State) => state.api)
  const { cart } = useSelector((state:State) => state.shop)

  return (
    <div className='cart'>
      <GlobalComponents.Path paths={['Cart']} />
      <div className="cart-inner md:flex md:justify-start">
        <GlobalComponents.SidebarComponents.FullSidebar />
        <div className="cart-items md:w-[82%]">
          {products.map((p:Interfaces.Product) => <CartComponents.CartItem key={`cart-item-key-${p.id}`} cartItem={p} /> )} 
        </div>
      </div>
      
    </div>
  )
}

export default Cart
