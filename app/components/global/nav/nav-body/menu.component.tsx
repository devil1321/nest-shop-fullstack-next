'use client'
import React, { MutableRefObject, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'
import gsap from 'gsap'

const Menu = () => {

  const { cart } = useSelector((state:State) => state.shop)
  const { user } = useSelector((state:State) => state.api)
  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)
  
 const profileMenuRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleProfileMenu = () =>{
    if(!profileMenuRef.current.classList.contains('--open')){
        profileMenuRef.current.classList.add('--open')
        profileMenuRef.current.style.display = 'block'
        gsap.fromTo('.nav-body-search-categories-menu',{ y:30, opacity:0 },{y:0,opacity:1})
    }else{
        gsap.fromTo('.nav-body-search-categories-menu',{y:0,opacity:1},{ y:30, opacity:0 ,onComplete:()=>{
            profileMenuRef.current.style.display = 'none'
            profileMenuRef.current.classList.remove('--open')
        }})
        
    }
  }

  return (
    <div className='nav-body-menu ml-auto md:w-[50%] mt-4 xl:mt-0 mb-0 xl:w-1/5 flex flex-wrap md:flex-nowrap justify-between xl:justify-end gap-10 items-center'>
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
            <span className='ml-2'>Cart</span>
        </Link>
      </div>
      <div className="nav-body-menu-item w-2/5 flex justify-start items-center relative top-0 left-0">
        <Image src="/assets/global/profile-icon.png" alt='profile-icon' width={15} height={15} />
        <span onClick={()=>handleProfileMenu()} className='cursor-pointer ml-2'>Profile</span>
        <div ref={profileMenuRef} className='nav-body-profile-menu rounded-md p-5 absolute top-5 z-20 left-1/2 -translate-x-1/2 bg-white shadow-lg shadow-gray-300'>
          <p className="p-2 w-[100%] hover:bg-gray-200 rounded-md text-green-300">{user?.email}</p>
          <Link className="p-2 block w-[100%] hover:bg-gray-200 rounded-md" href="/profile">Settings</Link>
        </div>
      </div>
      <div className="nav-body-menu-item w-2/5 flex justify-start items-center cursor-pointer" onClick={()=>APIActions.logout()}>Logout</div>
    </div>
  )
}

export default Menu
