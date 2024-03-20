'use client'
import React from 'react'
import Image from 'next/image'

const Path:React.FC<{paths:string[]}> = ({paths}) => {

  return (
    <div className='path flex justify-between items-center px-5 mx-auto relative top-0 left-0 w-[300px] h-[200px] md:w-[650px] md:h-[200px] lg:w-[1150px] lg:h-[200px] xl:w-[1250px] xl:h-[200px] 2xl:w-[1400px] 2xl:h-[250px]'>
      <Image className='absolute top-0 left-0 w-[100%] h-[100%]' src="/assets/global/blog-banner.png" alt="banner" width={1200} height={300} />
      <div className="path-way flex justify-between items-center w-max">
        <div className='font-bold'>Shop &gt;</div>
        {paths.map((path:string,index:number)=>{
            if(index < paths.length - 1){
                return <div key={`path-key-${index}`} className='mx-2 font-bold'>{path} &gt;</div>
            }else{
                return <div key={`path-key-${index}`} className='mx-2 font-bold'>{path}</div>
            }
        })}
      </div>
      <div className="path-tags hidden lg:flex gap-5">
        <div className='rounded-full px-2 py-1 bg-white relative z-10 left-0 top-0 hover:text-green-500 cursor-pointer shadow-lg shadow-gray-300 flex justify-between items-center font-bold'><span className='mr-2 font-thin'>x</span>Kitchen</div>
        <div className='rounded-full px-2 py-1 bg-white relative z-10 left-0 top-0 hover:text-green-500 cursor-pointer shadow-lg shadow-gray-300 flex justify-between items-center font-bold'><span className="mr-2 font-thin">x</span>Shopping</div>
        <div className='rounded-full px-2 py-1 bg-white relative z-10 left-0 top-0 hover:text-green-500 cursor-pointer shadow-lg shadow-gray-300 flex justify-between items-center font-bold'><span className="mr-2 font-thin">x</span>Recipes</div>
        <div className='rounded-full px-2 py-1 bg-white relative z-10 left-0 top-0 hover:text-green-500 cursor-pointer shadow-lg shadow-gray-300 flex justify-between items-center font-bold'><span className="mr-2 font-thin">x</span>News</div>
        <div className='rounded-full px-2 py-1 bg-white relative z-10 left-0 top-0 hover:text-green-500 cursor-pointer shadow-lg shadow-gray-300 flex justify-between items-center font-bold'><span className="mr-2 font-thin">x</span>Food</div>
      </div>
    </div>
  )
}

export default Path
