'use client'
import React from 'react'
import Image from 'next/image';
import * as Interfaces from '@/app/controller/interfaces'
import { useDispatch,useSelector } from 'react-redux';
import * as ShopActions from '@/app/controller/action-creators/shop.action-creators'
import { bindActionCreators } from 'redux';
import { State } from '@/app/controller/reducers/root.reducer'
import Link from 'next/link';

interface ProductProps{
    className:string;
    product:Interfaces.Product
}

const Product:React.FC<ProductProps> = ({product,className}) => {

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const { currency } = useSelector((state:State) => state.ui)

  return (
    <div className={`product mx-2 md:mx-0 cursor-pointer transition-all rounded-[25px] shadow-lg shadow-gray-200 relative top-0 left-0 ${className}`}>
      {product.event && <div className="product-event absolute top-0 left-0 w-[40%] text-center font-bold text-white bg-orange-600 px-5 py-2">{product.event}</div>}
      <div className="product-image-wrapper overflow-hidden h-[250px]">
        <Link href="/details/[id]" as={`/details/${product.id}`}>
          <Image src={product.img} alt="product-img" width={300} height={500} />
        </Link>
      </div>
      <h3 className="px-2 text-md font-bold">{product.title}</h3>
      <p className=" px-2 text-sm text-gray-500">{product.category === 1 ? "Snack" : product.category === 2 ? "Organic" : product.category === 3  ? "Vege" : null}</p>
      <p className="text-yellow-600 px-2 text-sm">&#9734;{product.rating}</p>
      <p className=" px-2 text-sm text-green-500">{product.company}</p>
      <div className="product-price flex my-2 items-center">
        <p className="text-green-300 mx-2 text-sm font-bold">{currency}{product.price}</p>
        <p className="text-green-300 mr-2 text-sm line-through font-bold">{currency}{product.prevPrice}</p>
        <button onClick={()=>{
          if(!product.inCart){
            shopActions.addToCart(product.id,1)
          }
        }} className={`text-green-300 border-[1px] border-green-300 px-2 py-1 rounded-md hover:bg-green-300 hover:text-white transition-all ${product.inCart && 'text-white bg-green-300'}`}>{product.inCart ? "In Cart" : 'Add'}</button>
      </div>
    </div>
  )
}

export default Product
