import React from 'react'
import Image from 'next/image'

interface ItemProps{
    title:string;
    address:string;
    zip:string;
    phone:string;
    email:string;
}

const Item:React.FC<ItemProps> = ({title,address,zip,phone,email}) => {
  return (
    <div className='contact-adresses-item'>
      <h3 className="text-2xl font-bold text-green-300">{title}</h3>
      <p className="text-sm text-gray-500 my-2">{address}</p>
      <p className="text-sm text-gray-500 my-2">{zip}</p>
      <p className="text-sm text-gray-500 my-2">{phone}</p>
      <p className="text-sm text-gray-500 my-2">{email}</p>
      <button className='px-5 py-3 flex items-center text-white rounded-md bg-green-500 hover:bg-green-300'>
        <Image className='mr-1' src="/assets/global/map-btn-icon.png" width={15} height={15} alt='map-icon' />
        <span>View Map</span>
      </button>
    </div>
  )
}

export default Item
