'use client'
import React, { forwardRef, MutableRefObject, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import Image from 'next/image'

const Filter:React.FC<{setMin:(min:number)=>any,setMax:(max:number)=>any;min:number;max:number,setCategory:(category:number)=>any}> = ({setCategory,setMin,setMax,max,min}) =>{

  const [isMin,setIsMin] = useState<boolean>(false)
  const [isMax,setIsMax] = useState<boolean>(false)


  const minRef = useRef() as MutableRefObject<HTMLDivElement>
  const maxRef = useRef() as MutableRefObject<HTMLDivElement>
  const sliderMinRef = useRef() as MutableRefObject<HTMLDivElement>
  const sliderMaxRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleMin = (e:any) =>{
    if(isMin){
      const rect = sliderMinRef.current.getBoundingClientRect()
      const pos = e.pageX - rect.left
      if(pos > 0 && pos < sliderMinRef.current.clientWidth){
        minRef.current.style.left = pos - 19 + 'px'
        minRef.current.textContent = String(min)
      }
    }
  }

  const handleMax = (e:any) =>{
    if(isMax){
      const rect = sliderMinRef.current.getBoundingClientRect()
      const pos = e.pageX - rect.left
      if(pos > 0 && pos < sliderMaxRef.current.clientWidth){
        maxRef.current.style.left = pos - 19 + 'px'
        maxRef.current.textContent = String(max)
      }
    }
  }

  return (
    <div className='sidebar-filter'>
        <h3 className='sidebar-filter-header font-bold text-md'>Filter</h3>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <div className="sidebar-filter-sliders">
              <div ref={sliderMinRef} onMouseDown={()=>setIsMin(true)} onMouseUp={()=>setIsMin(false)} className="sidebar-filter-slider relative top-0 left-0 mb-10 w-[125px]">
                <div className="label block">Min Price:</div>
                <input onChange={(e)=>setMin(Number(Number(e.target.value)))} onMouseMove={(e)=>handleMin(e)} value={min} className='block my-2' type="range" name="min" id="" min={0} max={400} />
                <div ref={minRef} className="sidebar-filter-slider-count bg-green-500 rounded-md w-fit px-3 font-bold text-white absolute top-15 left-0">0</div>
              </div>
              <div ref={sliderMaxRef} onMouseDown={()=>setIsMax(true)} onMouseUp={()=>setIsMax(false)} className="sidebar-filter-slider relative top-0 left-0 mb-10 w-[125px]">
              <div className="label block">Max Price:</div>
                <input onChange={(e)=>setMax(Number(Number(e.target.value)))} onMouseMove={(e)=>handleMax(e)} value={max} className='block my-2' type="range" name="max" id="" min={0} max={400} />
                <div ref={maxRef} className="sidebar-filter-slider-count bg-green-500 rounded-md w-fit px-3 font-bold text-white absolute top-15 left-0">0</div>
              </div>
            </div>
            <h2 className="text-sm font-bold my-5">Color</h2>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="radio" name="category_1" value={1} id="" onChange={(e)=>setCategory(Number(e.target.value))}/>
              <span>Red</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="radio" name="category_1" id="" value={2} onChange={(e)=>setCategory(Number(e.target.value))}/>
              <span>Green</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="radio" name="category_1" id="" value={3} onChange={(e)=>setCategory(Number(e.target.value))}/>
              <span>Blue</span>
            </div>
            <h2 className="text-sm font-bold my-5">Item Condition</h2>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="radio" name="category" id="" value={1} onChange={(e)=>setCategory(Number(e.target.value))}/>
              <span>New (1506)</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="radio" name="category" id="" value={2} onChange={(e)=>setCategory(Number(e.target.value))}/>
              <span>Green Refurbished (27)</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="radio" name="category" id="" value={3} onChange={(e)=>setCategory(Number(e.target.value))}/>
              <span>Used (45)</span>
            </div>
            <div className="sidebar-filter-action flex justify-between items-end w-[100%] md:w-fit">
              <button type="submit" className='py-3 px-10 font-bold text-white bg-green-500 rounded-md' onClick={()=>{
                setMin(0)
                setMax(400)
                setCategory(0)
              }}>Filter</button>
              <Image src="/assets/global/footer-image.png" alt="leaves" width={100} height={100} />
            </div>
        </form>
    </div>
  )
}

export default Filter
