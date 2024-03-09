import React from 'react'
import Image from 'next/image';

const Item:React.FC<{img:string,title:string;}> = ({img,title}) => {
  return (
    <div className='home-figures-figure-item transition-all hover:-translate-y-5 hover:opacity-100 cursor-pointer opacity-70 p-4 bg-gray-200 rounded-md flex flex-col justify-center items-center'>
      <Image src={img} alt="figure-image" width={100} height={80} />
      <p className="text-sm font-bold text-center">{title}</p>
    </div>
  )
}

export default Item
