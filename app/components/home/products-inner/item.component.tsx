import React from 'react'
import Image from 'next/image'
import * as Interfaces from '@/app/controller/interfaces'

const Item:React.FC<{product:Interfaces.Product}> = ({product}) => {
  return (
    <div className='home-products-inner-item hover:text-green-500 cursor-pointer w-1/3 flex items-center'>
      <Image src={product.img} alt="product-image" width={100} height={100} />
      <div className="home-products-inner-item-details">
        <h3 className="font-bold text-md">{product.title}</h3>
        <p className="text-yellow-600 px-2 text-sm">&#9734;{product.rating}</p>
        <div className="home-products-inner-item-price flex my-2 items-center">
        <p className="text-green-300 px-2 text-md font-bold">${product.price}</p>
        <p className="text-green-300 px-2 text-md line-through font-bold">${product.prevPrice}</p>
      </div>
      </div>
    </div>
  )
}

export default Item
