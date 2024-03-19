'use client'
import React from 'react'
import Image from 'next/image';
import * as Interfaces from '@/app/controller/interfaces'
import useCartItem from '@/app/hooks/useCartItem';
import { useDispatch } from 'react-redux';
import * as ShopActions from '@/app/controller/action-creators/shop.action-creators'
import { bindActionCreators } from 'redux';
import useQuantity from '@/app/hooks/useQuantity';

interface ItemProps{
    className?:string;
    cartItem:Interfaces.Product
}

const CartItem:React.FC<ItemProps> = ({cartItem,className}) => {

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const [item,setItem] = useCartItem(cartItem.id) as any
  const [quantity,setQuantity] = useQuantity(cartItem.id) as any
  

  return (
    <div className={`cart-item my-5 shadow-lg shadow-gray-300 flex items-center mx-2 md:mx-0 cursor-pointer transition-all rounded-[25px] border-[1px] border-gray-200 relative top-0 left-0 ${className}`}>
      {item?.event && <div className="cart-item-event absolute top-0 left-0 w-[40%] text-center font-bold text-white bg-orange-600 px-5 py-2">{item.event}</div>}
      <Image src={item?.img} alt="item-img" width={300} height={500} />
      <div className="cart-item-details ml-5">
          <h3 className="px-2 text-md font-bold">{item?.title}</h3>
          <p className=" px-2 text-sm text-gray-500">{item?.category === 1 ? "Snack" : item?.category === 2 ? "Organic" : item?.category === 3  ? "Vege" : null}</p>
          <p className="text-yellow-600 px-2 text-sm">&#9734;{item?.rating}</p>
          <p className=" px-2 text-sm text-green-500">{item?.company}</p>
          <div className="cart-item-price flex my-2 items-center">
            <p className="text-green-300 px-2 text-md font-bold">${item?.price}</p>
            <p className="text-green-300 px-2 text-md line-through font-bold">${item?.prevPrice}</p>
            <div className="cart-item-buttons flex items-center gap-1">
               <button className="rounded-md h-8 w-8 font-bold text-white bg-green-300 hover:bg-green-500">-</button>
               <button className="rounded-md h-8 w-8 font-bold text-white bg-green-300 hover:bg-green-500">{quantity}</button>
               <button className="rounded-md h-8 w-8 font-bold text-white bg-green-300 hover:bg-green-500">+</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItem
