import React from 'react'
import Image from 'next/image'

interface ItemProps{
    img:string;
    heading:string;
    paragraph:string;
}

const Item:React.FC<ItemProps> = ({img,heading,paragraph}) => {
  return (
    <div className='home-carousel-item relative top-0 left-0 xl:min-w-[1060px] xl:h-[400px] rounded-lg overflow-hidden'>
      <Image className='absolute top-0 left-0 w-[100%} h-[100%]' src={img} alt='carousel-image' width={1200} height={500} />
      <div className="home-carousel-item-details absolute top-40 left-10">
        <h2 className="text-4xl font-bold w-2/3 my-2">{heading}</h2>
        <p className="text-md">{paragraph}</p>
        <div className="home-carousel-item-field rounded-full my-4 bg-white w-fit">
            <form action="" className='flex items-center'>
                <input className='ml-5 opacity-0' type="text" placeholder='Your emaill address'/>
                <button className='rounded-full bg-green-500 font-bold text-white py-2 px-6'>Subscribe</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Item
