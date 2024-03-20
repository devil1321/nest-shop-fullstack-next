'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'

const Menu = () => {

  const { cart } = useSelector((state:State) => state.shop)
    
  return (
    <div className='nav-body-menu mx-auto md:w-[50%] mt-4 xl:mt-0 mb-0 xl:w-1/4 flex flex-wrap md:flex-nowrap justify-between xl:justify-end gap-12 items-center'>
      <div className="nav-body-menu-item w-2/5 flex justify-start items-center">
        <Image src="/assets/global/compare-icon.png" alt='compare-icon' width={15} height={15} />
        <Link className='nav-body-menu-item w-2/5' href="/compare">
            <span className='ml-3'>Compare</span>
        </Link>
      </div>
      <div className="nav-body-menu-item w-2/5 flex justify-start items-center relative top-0 left-0">
        <div className="nav-body-menu-item-count absolute -top-3 left-1 rounded-full bg-green-300 text-white flex items-center justify-center w-5 h-5">{cart.length}</div>
        <Image src="/assets/global/cart-icon.png" alt='cart-icon' width={15} height={15} />
        <Link className='nav-body-menu-item w-2/5' href="/cart">
            <span className='ml-3'>Cart</span>
        </Link>
      </div>
      <div className="nav-body-menu-item w-2/5 flex justify-start items-center">
        <Image src="/assets/global/profile-icon.png" alt='profile-icon' width={15} height={15} />
        <Link className='nav-body-menu-item w-2/5' href="/profile">
            <span className='ml-3'>Profile</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu
