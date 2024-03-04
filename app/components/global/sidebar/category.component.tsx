import React from 'react'
import Image from 'next/image'

const Category = () => {
  return (
    <div className='sidebar-category'>
        <h3 className='sidebar-category-header font-bold text-md'>Category</h3>
        <div className="sidebar-category-item hover:opacity-70 cursor-pointer flex justify-between items-center text-sm my-5 w-[200px]">
            <Image src="/assets/global/category-1.svg" alt='' width={20} height={20} />
            <span className="mr-auto ml-2">Milks & Dairies</span>
            <span className='rounded-full bg-green-500 w-[25px] h-[25px] flex justify-center items-center font-bold text-white'>10</span>
        </div>
        <div className="sidebar-category-item hover:opacity-70 cursor-pointer flex justify-between items-center text-sm my-5 w-[200px]">
            <Image src="/assets/global/category-2.svg" alt='' width={20} height={20} />
            <span className="mr-auto ml-2">Clothing</span>
            <span className='rounded-full bg-green-500 w-[25px] h-[25px] flex justify-center items-center font-bold text-white'>10</span>
        </div>
        <div className="sidebar-category-item hover:opacity-70 cursor-pointer flex justify-between items-center text-sm my-5 w-[200px]">
            <Image src="/assets/global/category-3.svg" alt='' width={20} height={20} />
            <span className="mr-auto ml-2">Pet Foods</span>
            <span className='rounded-full bg-green-500 w-[25px] h-[25px] flex justify-center items-center font-bold text-white'>10</span>
        </div>
        <div className="sidebar-category-item hover:opacity-70 cursor-pointer flex justify-between items-center text-sm my-5 w-[200px]">
            <Image src="/assets/global/category-4.svg" alt='' width={20} height={20} />
            <span className='mr-auto ml-2'>Baking material</span>
            <span className='rounded-full bg-green-500 w-[25px] h-[25px] flex justify-center items-center font-bold text-white'>10</span>
        </div>
        <div className="sidebar-category-item hover:opacity-70 cursor-pointer flex justify-between items-center text-sm my-5 w-[200px]">
            <Image src="/assets/global/category-5.svg" alt='' width={20} height={20} />
            <span className="mr-auto ml-2">Fresh Fruit</span>
            <span className='rounded-full bg-green-500 w-[25px] h-[25px] flex justify-center items-center font-bold text-white'>10</span>
        </div>
    </div>
  )
}

export default Category
