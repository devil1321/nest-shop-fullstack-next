import React from 'react'
import Image from 'next/image';
import * as Interfaces from '@/app/controller/interfaces'

interface ProductProps{
    className:string;
    product:Interfaces.Product
}

const Product:React.FC<ProductProps> = ({product,className}) => {
  return (
    <div className={`product cursor-pointer transition-all rounded-[25px] border-[1px] border-gray-200 relative top-0 left-0 ${className}`}>
      {product.event && <div className="product-event absoute top-0 left-0 w-[40%] text-center font-bold text-white bg-orange-600 px-5 py-2">{product.event}</div>}
      <Image src={product.img} alt="product-img" width={300} height={500} />
      <p className=" px-2 text-sm text-gray-500">{product.category === 1 ? "Snack" : product.category === 2 ? "Organic" : product.category === 3  ? "Vege" : null}</p>
      <p className="text-yellow-600 px-2 text-sm">&#9734;{product.rating}</p>
      <p className=" px-2 text-sm text-green-500">{product.company}</p>
      <div className="product-price flex my-2">
        <p className="text-green-300 px-2 text-md font-bold">${product.price}</p>
        <p className="text-green-300 px-2 text-md line-through font-bold">${product.prevPrice}</p>
      </div>
    </div>
  )
}

export default Product
