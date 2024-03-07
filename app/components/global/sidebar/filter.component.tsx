'use client'
import React, { MutableRefObject, useRef, useState } from 'react'
import Image from 'next/image'

const Filter = () => {

  const [isMin,setIsMin] = useState<boolean>(false)
  const [isMax,setIsMax] = useState<boolean>(false)

  const [min,setMin] = useState<number>(0)
  const [max,setMax] = useState<number>(0)

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
        <form action="">
            <div className="sidebar-filter-sliders">
              <div ref={sliderMinRef} onMouseDown={()=>setIsMin(true)} onMouseUp={()=>setIsMin(false)} className="sidebar-filter-slider relative top-0 left-0 mb-10 w-[125px]">
                <input onChange={(e)=>setMin(Number(e.target.value))} onMouseMove={(e)=>handleMin(e)} value={min} className='block my-2' type="range" name="min" id="" min={0} max={100} />
                <div ref={minRef} className="sidebar-filter-slider-count bg-green-500 rounded-md w-fit px-3 font-bold text-white absolute top-5 left-0">0</div>
              </div>
              <div ref={sliderMaxRef} onMouseDown={()=>setIsMax(true)} onMouseUp={()=>setIsMax(false)} className="sidebar-filter-slider relative top-0 left-0 mb-10 w-[125px]">
                <input onChange={(e)=>setMax(Number(e.target.value))} onMouseMove={(e)=>handleMax(e)} value={max} className='block my-2' type="range" name="max" id="" min={0} max={100} />
                <div ref={maxRef} className="sidebar-filter-slider-count bg-green-500 rounded-md w-fit px-3 font-bold text-white absolute top-5 left-0">0</div>
              </div>
            </div>
            <h2 className="text-sm font-bold my-5">Color</h2>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="checkbox" name="" id="" />
              <span>Red</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="checkbox" name="" id="" />
              <span>Green</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="checkbox" name="" id="" />
              <span>Blue</span>
            </div>
            <h2 className="text-sm font-bold my-5">Item Condition</h2>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="checkbox" name="" id="" />
              <span>New (1506)</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="checkbox" name="" id="" />
              <span>GreRefurbished (27)en</span>
            </div>
            <div className="sidebar-filter-checkbox">
              <input className='mr-2 accent-green-500' type="checkbox" name="" id="" />
              <span>Used (45)</span>
            </div>
            <div className="sidebar-filter-action flex justify-between items-end w-fit">
              <button type="submit" className='py-3 px-10 font-bold text-white bg-green-500 rounded-md'>Filter</button>
              <Image src="/assets/global/footer-image.png" alt="leaves" width={100} height={100} />
            </div>
        </form>
    </div>
  )
}

export default Filter
