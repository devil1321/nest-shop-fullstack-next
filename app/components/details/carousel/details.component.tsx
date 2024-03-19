'use client'
import React, { use, useEffect, useState } from 'react'
import * as Interfaces from '@/app/controller/interfaces'
import Link from 'next/link'
import useQuantity from '@/app/hooks/useQuantity'
import { useDispatch,useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as ShopActions from '@/app/controller/action-creators/shop.action-creators'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'


const Details:React.FC<{ product:Interfaces.Product }> = (props) => {

  const { products } = useSelector((state:State) => state.api)
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const APIActions = bindActionCreators(ApiActions,dispatch)

  const [product,setProduct] = useState<Interfaces.Product>(props.product)
  
  const [quantity,setQuantity] = useQuantity(props.product.id) as any

  const handleProduct = () =>{
    const productItem = products.find((p:Interfaces.Product) => p.id === props.product.id) as Interfaces.Product
    setProduct(productItem)
  }

  useEffect(()=>{
    handleProduct()
    if(products.length <= 0){
      APIActions.setProducts()
    }
  },[props,products])
  
  return (
    <div className='details-carousel-details md:w-1/2 order-1 md:order-2'>
      <div className="text-red-500 py-2 bg-red-200 rounded-md text-center">{product?.event}</div>
      <h3 className="px-4 md:px-0 text-3xl my-5 font-bold">{product?.title}</h3>
      <p className="text-yellow-600 my-2 text-sm">Rating &#9734;{product?.rating}</p>
      <div className="details-carousel-details-price my-2 flex justify-start items-center gap-5">
        <div className="px-5 py-2 text-green-500 font-bold rounded-md bg-green-300">${product?.price}</div>
        <div className="px-5 py-2 text-red-500 bg-red-300 font-bold rounded-md line-through">${product?.prevPrice}</div>
      </div>
      <p className="text-gray-500 my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quibusdam omnis porro culpa sapiente nesciunt iusto. Est, reprehenderit hic suscipit laboriosam sunt ipsum molestiae vitae exercitationem voluptate tempora ad cupiditate rem. Dolore inventore maxime sit? Amet consequuntur impedit deserunt nam nostrum vel saepe distinctio officiis odio eum dolorem minima beatae illo voluptatem, incidunt quia facere asperiores dolorum dolores? Adipisci reiciendis autem sunt. Autem quisquam cupiditate nihil eos maiores amet voluptatum, ullam illum nam atque voluptas ut consequatur nesciunt aliquam perferendis, suscipit quae officiis! Consectetur perferendis a eligendi officia fuga libero, voluptatibus nesciunt aperiam ipsa, blanditiis modi laudantium labore ducimus tempore.</p>
      <div className="details-carousel-details-buttons my-5 flex gap-3">
        {!product?.inCart 
          ? <button className='bg-yellow-500 rounded-md font-bold text-white px-5 py-2 hover:bg-green-300'>Add To Cart</button>
          : <button className='bg-green-500 rounded-md font-bold text-white px-5 py-2 hover:bg-green-300'>In Cart</button>}
        <Link className='bg-yellow-500 hover:bg-green-700 rounded-md px-5 py-2 text-white font-bold' href="/products">Continue Shopping</Link>
      </div>
      <div className="details-carousel-details-quantity flex gap-3">
        <div className='rounded-md text-white cursor-pointer bg-green-300 hover:bg-green-500 font-bold w-8 h-8 flex justify-center items-center'>-</div>
        <div className='rounded-md text-white cursor-pointer bg-green-300 hover:bg-green-500 font-bold w-8 h-8 flex justify-center items-center'>{quantity}</div>
        <div className='rounded-md text-white cursor-pointer bg-green-300 hover:bg-green-500 font-bold w-8 h-8 flex justify-center items-center'>+</div>
      </div>
    </div>
  )
}

export default Details
