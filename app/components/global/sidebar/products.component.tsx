import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='sidebar-products'>
      <h3 className='sidebar-products-header font-bold text-md'>Products</h3>
      {/* @ts-ignore */}
      {[...Array(3).keys()].map((k:any)=>
        <div key={k} className='sidebar-products-product my-3'>
          <Image src={`/assets/global/product-${k + 1}.png`} alt="" width={50} height={50} />
        </div>
      )}
    </div>
  )
}

export default Products
