import React from 'react'
import Image from 'next/image';

interface ItemProps{
    img:string;
    name:string;
    position:string;
}

const Item:React.FC<ItemProps> = ({img,name,position}) => {
  return (
    <div className='about-teams-item cursor-pointer transition-all md:w-1/3'>
      <Image className='about-teams-item-image transition-all rounded-lg overflow-hidden' src={img} alt="person-image"  width={600} height={700} />
      <div className="about-teams-item-details transition-all text-center p-5 bg-white relative w-[90%] rounded-lg shadow-lg shadow-gray-300 -top-12 left-1/2 -translate-x-1/2">
        <h3 className="font-bold my-2 text-md">{name}</h3>
        <p className="text-sm my-2 text-gray-500">{position}</p>
        <div className="about-teams-item-icons my-2 flex gap-1 justify-center items-center">
            <Image src="/assets/global/facebook.png" alt='social-icon' width={15} height={15} />
            <Image src="/assets/global/twitter.png" alt='social-icon' width={15} height={15} />
            <Image src="/assets/global/pinterest.png" alt='social-icon' width={15} height={15} />
            <Image src="/assets/global/instagram.png" alt='social-icon' width={15} height={15} />
        </div>
      </div>
    </div>
  )
}

export default Item
