'use client'
import React, { MutableRefObject, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Search = () => {
  
  const [categoriesOption,setCategoriesOption] = useState<string>('All Categories')
  const [searchField,setSearchField] = useState<string>('')
  const [searchMatches,setSearchMatches] = useState<string[]>([])
  
  const categoryMenuRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleCategoryMenu = () =>{
    if(!categoryMenuRef.current.classList.contains('--open')){
        categoryMenuRef.current.classList.add('--open')
        categoryMenuRef.current.style.display = 'block'
        gsap.fromTo('.nav-body-search-categories-menu',{ y:30, opacity:0 },{y:0,opacity:1})
    }else{
        gsap.fromTo('.nav-body-search-categories-menu',{y:0,opacity:1},{ y:30, opacity:0 ,onComplete:()=>{
            categoryMenuRef.current.style.display = 'none'
            categoryMenuRef.current.classList.remove('--open')
        }})
        
    }
  }

  return (
    <div className="nav-body-search md:w-1/2 border-[1px] border-slate-300 p-2 flex items-center divide-x-2 divide-x-slate-200">
        <div className='nav-body-search-categories relative top-0 xl:-left-1 left-0 px-2'>
          <h3 onClick={()=>handleCategoryMenu()} className="cursor-pointer text-sm font-bold min-w-[100px]">{categoriesOption}</h3>
            <div ref={categoryMenuRef} className="nav-body-search-categories-menu absolute w-max z-10 top-10 left-1/2 -translate-x-1/2 bg-white border-[1px] border-slate-200 shadow-lg shadow-gray-300">
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">All Categories</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Cake & Milk</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Oganic Kiwi</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Peach</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Red Apple</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Snack</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Vegetables</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Strawberry</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Black plum</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Custard apple</div>
                <div onClick={(e:any)=>{
                    setCategoriesOption(e.target.textContent)
                    handleCategoryMenu()
                    }} className="nav-body-search-categories-option p-2 hover:bg-slate-200  cursor-pointer">Coffe & Tea</div>
            </div>
          </div>
          <div className="nav-body-search-field relative top-0 left-0 w-[100%] px-2 flex justify-between items-center">
            <input className='w-[95%]' type="text" placeholder='Search Items' onChange={(e:any) => setSearchField(e.target.value)}  value={searchField}/>
            <Image className='opacity-50' src="/assets/global/magnifer-icon.png" alt="magnifier" width={20} height={20} />
            {searchMatches.length > 0 && 
                <div className="nav-body-search-matches absolute w-[100%] z-10 top-10 left-1/2 -translate-x-1/2 bg-white border-[1px] border-slate-200 shadow-lg shadow-gray-500">
                    {searchMatches.map((m:string) => <div className="nav-body-search-match p-2 hover:bg-slate-200 cursor-pointer">{m}</div>)}
                </div>
            }  
          </div>
      </div>
  )
}

export default Search
