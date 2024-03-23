'use client'
import React, { useEffect, useState } from 'react'
import { State } from '../controller/reducers/root.reducer'
import { useSelector } from 'react-redux'
import * as Interfaces from '@/app/controller/interfaces'

const useCartItem = (id:number) => {

  const [item,setItem] = useState<Interfaces.Product>()

  const { products } = useSelector((state:State) => state.api)
  const { cart } = useSelector((state:State) => state.api)

  const handleItem = () =>{
    const item = products.find((p:Interfaces.Product) => p.id === id) as Interfaces.Product
    setItem(item as Interfaces.Product)
  }

  useEffect(()=>{
    handleItem()
  },[id,cart.length,products])

  return [item,setItem]
}

export default useCartItem
