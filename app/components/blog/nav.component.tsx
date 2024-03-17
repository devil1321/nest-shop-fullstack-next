
'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useFetchCategories from '@/app/hooks/useFetchCategories'
import gsap from 'gsap'

const Nav = () => {

  const [categories,setCategories] = useFetchCategories('/assets/categories.json')
  const [category,setCategory] = useState<string>('')
  const [howMany,setHowMany] = useState<number[]>(Array.from(Array(50).keys()))
  const [many,setMany] = useState<number>(50)

  const manyMenuRef = useRef() as MutableRefObject<HTMLDivElement>
  const categoryMenuRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleMenu = (ref:MutableRefObject<HTMLDivElement>) =>{
    if(!ref.current.classList.contains('--open')){
        ref.current.classList.add('--open')
        ref.current.style.display = 'block'
        gsap.fromTo(ref.current,{ y:30, opacity:0 },{y:0,opacity:1})
    }else{
        gsap.fromTo(ref.current,{y:0,opacity:1},{ y:30, opacity:0 ,onComplete:()=>{
            ref.current.style.display = 'none'
            ref.current.classList.remove('--open')
        }})
        
    }
  }

  useEffect(()=>{
    // @ts-ignore
    setCategory(categories[0]?.category)
  },[categories])
  return (
    <div className='blog-nav mt-12 mb-5 flex justify-between items-center'>
      <div className="blog-nav-title flex items-center">
        <Image className='mr-2' src="/assets/blog/recipes-icon.png" alt="icon" width={50} height={50} />
        <h1 className="font-bold text-2xl">Recips Articles</h1>
      </div>
      <div className="blog-nav-controls flex flex-wrap md:flex-nowrap gap-3">
         <div className="blog-nav-many-menu-wrapper z-10 relative top-0 left-0">
            <div onClick={()=>handleMenu(manyMenuRef)} className="blog-nav-many  cursor-pointer font-bold text-white flex items-center bg-green-300 border-[1px] border-gray-200 rounded-md px-5 py-1"><Image className='mr-2' src="/assets/global/category-icon.png" alt='category-icon' width={20} height={10} />Show: {many}</div>
            <div ref={manyMenuRef} className="blog-nav-many-menu  h-[400px] p-2 overflow-y-scroll bg-green-300 rounded-lg shadow-lg shadow-gray-300 absolute top-10 left-1/2 -translate-x-1/2">
                {howMany.slice(0,howMany.length).map((many:number)=><div key={`many-key-${many}`} onClick={()=>{
                    setMany(many + 1)
                    handleMenu(manyMenuRef)
                }} className="blog-nav-many-menu-item font-bold text-white px-10 py-2 rounded-md hover:bg-green-200 cursor-pointer">{many + 1}</div>)}
            </div>
         </div>
         <div className="blog-nav-many-menu-wrapper relative top-0 left-0">
            <div onClick={()=>handleMenu(categoryMenuRef)} className="blog-nav-category cursor-pointer  font-bold text-white flex items-center bg-green-300 border-[1px] border-gray-200 rounded-md px-5 py-1"><Image className='mr-2' src="/assets/global/category-icon.png" alt='category-icon' width={20} height={10} />{category}</div>
            <div ref={categoryMenuRef} className="blog-nav-category-menu  w-[160px] px-2 h-[400px]  bg-green-300 rounded-lg shadow-lg shadow-gray-300 absolute top-10 left-1/2 -translate-x-1/2">
                {/* @ts-ignore */}
                {categories?.map((c:any)=><div onClick={()=>{
                    setCategory(c.category)
                    handleMenu(categoryMenuRef)
                }} key={`categories-key-${c}`} className="blog-nav-category-menu-item font-bold p-2 rounded-md text-white min-w-fit py-2 hover:bg-green-200 cursor-pointer">{c.category}</div>)}
            </div>
         </div>
   
      </div>
    </div>
  )
}

export default Nav
