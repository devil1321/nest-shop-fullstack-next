'use client'
import React from 'react'
import { GlobalComponents } from '../components/global'
import { useSelector,useDispatch } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import * as ShopActions from '@/app/controller/action-creators/shop.action-creators'
import * as Interfaces from '@/app/controller/interfaces'
import { CartComponents } from '../components/cart'
import { bindActionCreators } from 'redux'
import Link from 'next/link'

const Cart = () => {

  const { currency } = useSelector((state:State) => state.ui)
  const { cart,summary } = useSelector((state:State) => state.shop)
  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)
  const shopActions = bindActionCreators(ShopActions,dispatch)

  return (
    <div className='cart'>
      <GlobalComponents.Path paths={['Cart']} />
      <div className="cart-inner md:flex md:justify-start">
        <GlobalComponents.SidebarComponents.FullSidebar />
        {cart.length > 0 
          ? <div className="cart-items md:w-[82%]">
            {cart.map((p:Interfaces.CartItem) => <CartComponents.CartItem key={`cart-item-key-${p.id}`} cartItem={p} /> )} 
            {cart.length > 0 && <button className='mt-12 w-[100%] bg-red-200 text-red-500 hover:bg-red-400 hover:text-red-700 py-2 rounded-md' onClick={()=>shopActions.clearCart()}>Clear Cart</button>}
            {cart.length > 0 && <button className='mt-2 w-[100%] bg-green-300 text-white py-2 rounded-md font-bold'>Total: {currency}{summary}</button>}
            {cart.length > 0 && <Link href="/checkout" className='block text-center mt-2 w-[100%] bg-blue-300 hover:bg-blue-200 text-white py-2 rounded-md font-bold'>Checkout</Link>}
          </div>
          : <div className='flex flex-col justify-center items-center w-[100%] h-[300px]'>
              <h1 className="font-bold text-5xl text-green-300">Your Cart Is Empty</h1>
              <Link className='px-3 py-2 my-5 hover:bg-green-500 bg-green-300 font-bold text-md text-white rounded-md' href="/products">Continue Shopping</Link>
            </div>}
      </div>
    </div>
  )
}

export default Cart
