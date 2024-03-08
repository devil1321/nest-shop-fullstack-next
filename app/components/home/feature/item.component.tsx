import React from 'react'
import Image from 'next/image';

const FeatureItem:React.FC<{ img:string; title:string }> = ({img,title}) => {
  return (
    <div className='home-feature-item relative top-0 left-0 xl:w-[400px] xl:h-[200px] rounded-md overflow-hidden'>
      <Image className='absolute top-0 left-0 w-[100%] h-[100%]' src={img} alt="feature-item-image" width={400} height={300} />
      <div className="home-feature-item-details absolute top-12 left-5 z-10">
        <h3 className="text-xl font-bold my-5 w-3/4">{title}</h3>
        <button className='bg-green-500 rounded-md font-bold text-white px-3 py-1 hover:bg-green-300'>Shop Now</button>
      </div>
    </div>
  )
}

export default FeatureItem
