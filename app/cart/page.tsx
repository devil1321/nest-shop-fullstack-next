'use client'
import React, { useEffect, useState,useRef, MutableRefObject } from 'react'
import { GlobalComponents } from '../components/global'
import { useSelector,useDispatch } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import * as UiActions from '@/app/controller/action-creators/ui.action-creators'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import * as ShopActions from '@/app/controller/action-creators/shop.action-creators'
import * as Interfaces from '@/app/controller/interfaces'
import { CartComponents } from '../components/cart'
import { bindActionCreators } from 'redux'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { FALSE } from 'sass'

const Cart = () => {

  const [isMenu,setIsMenu] = useState<boolean>(false)
  const [isRequest,setIsRequest] = useState<boolean>(false)
  const [isReady,setIsReady] = useState<boolean>(false)
  const [tmpCart,setTmpCart] = useState<any[]>([])
  const [activeCart,setActiveCart] = useState<string>('')

  const { currency,refresh,isCartFiltered } = useSelector((state:State) => state.ui)
  const { cart,summary} = useSelector((state:State) => state.shop)
  const { user,products,cart:previosCart } = useSelector((state:State) => state.api)
  const dispatch = useDispatch()
  const UIActions = bindActionCreators(UiActions,dispatch)
  const APIActions = bindActionCreators(ApiActions,dispatch)
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const router = useRouter()

  const filterMenuRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleMenu = () =>{
    if(filterMenuRef.current){
      if(!filterMenuRef.current.classList.contains('--open')){
        filterMenuRef.current.classList.add('--open')
        filterMenuRef.current.style.display = 'block'
        gsap.fromTo('.cart-items-nav-menu',{ y:30, opacity:0 },{y:0,opacity:1})
      }else{
        gsap.fromTo('.cart-items-nav-menu',{y:0,opacity:1},{ y:30, opacity:0 ,onComplete:()=>{
          filterMenuRef.current.style.display = 'none'
          filterMenuRef.current.classList?.remove('--open')
        }})
      }
    }
  }  

  function filterDuplicates(cart:any) {
    const uniqueIds = [];
    const seenIds = new Set();

    // Iterate through each ID in the array
    for (const item of cart) {
        // Check if the ID has been seen before
        if (!seenIds.has(item.cart_id)) {
            // If not, add it to the unique IDs array and mark it as seen
            uniqueIds.push(item);
            seenIds.add(item.cart_id);
        }
    }

    return uniqueIds;
}

  
  const handleFilter = (c:any) =>{
    const items = previosCart.filter((i:any)=>i.cart_id === c.cart_id)
    if(items[0]){
      setActiveCart(items[0]?.createdAt)
    }
    const tempCart = items.map((i:any) => ({
      id:i.product_id,
      quantity:i.quantity,
      price:i.price
    }))
    shopActions.setCart(tempCart)
    setTmpCart(tempCart)
    setIsRequest(false)
  }

  
  useEffect(()=>{
    if(typeof window !== undefined){  
      if(user && tmpCart.length === 0){  
        if(user?.id && !isRequest && previosCart.length <= 0){
          APIActions.getCart(user.id)
          setIsRequest(true)
        }
      }
    }
  },[user,cart.length])

  useEffect(()=>{
    setTmpCart(cart)
  },[cart,refresh])

  useEffect(()=>{
      if(previosCart.length > 0){
        setIsMenu(true)
      }
  },[previosCart.length])


  return (
    <div className='cart'>
      <GlobalComponents.Path paths={['Cart']} />
      <div className="cart-inner md:flex md:justify-start">
        <GlobalComponents.SidebarComponents.FullSidebar />
        <div className='cart-items-wrapper md:w-[82%]'>
            <div className="cart-items-nav py-10 flex justify-between items-center">
              <span className='text-lg font-bold'>Filter Carts By Date</span>
              <div className="cart-items-nav-menu-active-cart relative top-0 left-0">
                <span onClick={()=>handleMenu()}  className='cursor-pointer px-5 font-bold text-white bg-green-300 p-2 rounded-md'>{!Boolean(tmpCart.length === 0) ? "Current" : 'Previous Carts'}</span>
                {isMenu &&
                  <div ref={filterMenuRef} className="cart-items-nav-menu absolute z-10 top-10 w-max left-1/2 -translate-x-1/2 bg-white rounded-md p-5 shadow-lg shadow-gray-300">
                    {filterDuplicates(previosCart).reverse().map((c:any) => <p key={`cart-filter-key-${c.id}`} className='p-2 w-[100%] text-center rounded-md hover:bg-green-300 cursor-pointer' onClick={()=>{
                      handleFilter(c)
                      handleMenu()
                    }}>{c.createdAt}</p>)}
                    <button onClick={()=>{
                        APIActions.clearHistory(user.id)
                        setIsMenu(false)
                        setTmpCart([])
                      }} className="block w-[100%] rounded-md my-2 p-2 bg-red-300 text-red-500 hover:text-red-700 hover:bg-red-400">Clear History</button>
                  </div>}
                </div>
            </div>
            {cart.length > 0 && tmpCart.length > 0
          ? <div className="cart-items">
            {tmpCart.map((p:Interfaces.CartItem) => <CartComponents.CartItem key={`cart-item-key-${p.id}`} cartItem={p} /> )} 
            {tmpCart.length > 0 && <button className='mt-12 w-[100%] bg-red-200 text-red-500 hover:bg-red-400 hover:text-red-700 py-2 rounded-md' onClick={()=>{
              shopActions.clearCart()
              setTmpCart([])
            }}>Clear Cart</button>}
            {tmpCart.length > 0 && <button className='mt-2 w-[100%] bg-green-300 text-white py-2 rounded-md font-bold'>Total: {currency}{summary}</button>}
            {tmpCart.length > 0 && <button onClick={()=>{
              APIActions.updateCart(cart,user)
              setTimeout(() => {
                shopActions.clearCart()
                router.push('/checkout')
              }, 1000);
            }} className='block text-center mt-2 w-[100%] bg-blue-300 hover:bg-blue-200 text-white py-2 rounded-md font-bold'>Checkout</button>}
          </div>
          : <div className='flex flex-col justify-center items-center w-[100%] h-[300px]'>
              <h1 className="font-bold text-5xl text-green-300">Your Cart Is Empty</h1>
              <Link className='px-3 py-2 my-5 hover:bg-green-500 bg-green-300 font-bold text-md text-white rounded-md' href="/products">Continue Shopping</Link>
            </div>}
        </div>
       
      </div>
    </div>
  )
}

export default Cart
