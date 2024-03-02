'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as UIActionCreators from '@/app/controller/action-creators/ui.action-creators'
import * as ShopActionCreators from '@/app/controller/action-creators/shop.action-creators'


const Header = () => {
    
    const dispatch = useDispatch()
    const UIState = useSelector((state:State) => state.ui)
    const UIActions = bindActionCreators(UIActionCreators,dispatch)
    const ShopActions = bindActionCreators(ShopActionCreators,dispatch)


    const [isLanguageMenu,setIsLanguageMenu] = useState<boolean>(false)
    const [isCurrencyMenu,setIsCurrencyMenu] = useState<boolean>(false)

  return (
    <div className='nav-header text-gray-500 text-sm py-1 flex flex-col gap-3 md:gap-0 md:flex-row justify-center md:justify-between items-center'>
        <div className="nav-header-menu divide-x divide-x-2 divide-x-slate-300 flex justify-between items-center gap-2">
            <Link className='text-center px-2' href="/about">About Us</Link>
            <Link className='text-center px-2' href="/profile">My Account</Link>
            <Link className='text-center px-2' href="/cart">Wishlist</Link>
            <Link className='text-center px-2' href="/order-tracking">Order Tracking</Link>
        </div>
        <div className="nav-header-content">100% Secure delivery without contacting the courier</div>
        <div className="nav-header-menu divide-x divide-x-2 divide-x-slate-300 flex justify-between items-start gap-2">
            <p>Need Help? Call us,<span className="text-green-500">+1800 900</span></p>
            <div className="nav-header-inner-menu px-2 flex justify-between items-center gap-2">
                <div className="nav-header-menu-item w-fit cursor-pointer hover:opacity-70 relative top-0 left-0">
                    <div onClick={()=>setIsLanguageMenu(!isLanguageMenu)} className='nav-header-menu-item-option flex justify-between items-center'>
                        <span>{UIState.language}</span>
                        <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10} />
                    </div>
                    {isLanguageMenu &&
                        <div className="nav-header-menu-item-inner-menu absolute top-7 left-1/2 border-[1px] border-slate-200 rounded-lg bg-white shadow-lg shadow-grey-300 p-2">
                            <p className='px-2 py-1 hover:bg-slate-200 rounded-md cursor-pointer' onClick={()=>{
                                UIActions.changeLanguage('English')
                                setIsLanguageMenu(false)
                            }}>English</p>
                            <p className='px-2 py-1 hover:bg-slate-200 rounded-md cursor-pointer' onClick={()=>{
                                UIActions.changeLanguage('Polish')
                                setIsLanguageMenu(false)
                            }}>Polish</p>
                        </div>}
                </div>
                <div className="nav-header-menu-item w-fit cursor-pointer hover:opacity-70 relative top-0 left-0">
                    <div onClick={()=>setIsCurrencyMenu(!isCurrencyMenu)} className='nav-header-menu-item-option flex justify-between items-center'>
                        <span>{UIState.currency}</span>
                        <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10} />
                    </div>
                    {isCurrencyMenu && 
                        <div className="nav-header-menu-item-inner-menu absolute top-7 left-1/2 border-[1px] border-slate-200 rounded-lg bg-white shadow-lg shadow-grey-300 p-2">
                            <p className='px-2 py-1 hover:bg-slate-200 rounded-md cursor-pointer' onClick={()=>{
                                UIActions.changeCurrency('USD')
                                ShopActions.changeCurrency('USD')
                                setIsCurrencyMenu(false)
                            }}>USD</p>
                            <p className='px-2 py-1 hover:bg-slate-200 rounded-md cursor-pointer' onClick={()=>{
                                UIActions.changeCurrency('EU')
                                ShopActions.changeCurrency('EU')
                                setIsCurrencyMenu(false)
                            }}>EU</p>
                            <p className='px-2 py-1 hover:bg-slate-200 rounded-md cursor-pointer' onClick={()=>{
                                UIActions.changeCurrency('PLN')
                                ShopActions.changeCurrency('PLN')
                                setIsCurrencyMenu(false)
                            }}>PLN</p>
                        </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
