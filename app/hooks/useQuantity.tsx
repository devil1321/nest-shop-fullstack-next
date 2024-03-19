'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import * as Interfaces from '@/app/controller/interfaces'

const useQuantity = (id:number) => {

  const { cart } = useSelector((state:State) => state.shop)

  const [quantity,setQuantity] = useState<number>(0)

  const handleQuantity = () =>{
    const item = cart.find((i:Interfaces.CartItem) => i.id === id) as Interfaces.CartItem
    setQuantity(item?.quantity)
  }

  useEffect(()=>{
    handleQuantity()
  },[id])

  return [quantity,setQuantity]
}

export default useQuantity
