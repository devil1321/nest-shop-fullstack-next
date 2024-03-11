'use client'
import React from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import * as UIActionCreators from '@/app/controller/action-creators/ui.action-creators'
import { bindActionCreators } from 'redux';

interface DetailsProps{
    title:string;
    paragraph_1:string;
    paragraph_2:string;
}

const Details:React.FC<DetailsProps> = ({title,paragraph_1,paragraph_2}) => {

  const dispatch = useDispatch()
  const UIActions = bindActionCreators(UIActionCreators,dispatch)

  return (
    <div className='about-carousel-details md:w-1/2'>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 my-2">{paragraph_1}</p>
      <p className="text-sm text-gray-500 my-2">{paragraph_2}</p>
      <div className="about-carousel-items-wrapper"> 
        <div className="about-carousel-items flex gap-3">
            {Array.from(Array(4).keys()).map((k:number) => <div onClick={()=>UIActions.setAboutCarouselImageSrc(`/assets/about/carousel-${k+1}.png`)} className='about-carousel-sm-item overflow-hidden h-[80px]'>
                                                                <Image src={`/assets/about/carousel-${k+1}.png`} alt='carousel-item-image' width={150} height={50} />
                                                            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Details
