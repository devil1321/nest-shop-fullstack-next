import React from 'react'
import View from './view.component'
import Details from './details.component'
import * as Interfaces from '@/app/controller/interfaces'

const Carousel:React.FC<{productImgSrc:string,product:Interfaces.Product}> = ({product,productImgSrc}) => {
  return (
    <div className='details-carousel mb-[150px] flex flex-col md:flex-row justify-between items-center'>
      <View productImgSrc={productImgSrc} />
      <Details product={product} />
    </div>
  )
}

export default Carousel
