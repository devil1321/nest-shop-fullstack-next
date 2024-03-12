'use client'
import React, { useEffect, useState,useRef, MutableRefObject, use } from 'react'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import gsap from 'gsap'

interface Cell {
    w:number;
    h:number;
}

const View = () => {
    
    const { aboutCarouselMainImageSrc } = useSelector((state:State) => state.ui)

    const [isSet,setIsSet] = useState<boolean>(false)

    const [rows,setRows] = useState<number>(0)
    const [columns,setColumns] = useState<number>(0)
    const [cells,setCells] = useState<Cell[]>([])

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const posx = useRef(0) as MutableRefObject<number>
    const posy = useRef(1) as MutableRefObject<number>
 
  const handleSetColumnsAndRows = () => {
      if (typeof window !== 'undefined') {
        let tmpCells = []
        if (window.innerWidth >= 1280) {
            setRows(14);
            setColumns(12);
        } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
            setRows(10);
            setColumns(10);
        } else {
            setRows(7);
            setColumns(7);
        }
        for(let i = 0; i < rows * columns; i++){
            tmpCells.push({w:50,h:50})
        }
        setCells(tmpCells)
      }   
}

const handleBackgroundPostion = () =>{
  let tmpCells:Cell[] = []
  tmpCells = cells.map((c:Cell) => {    
    posx.current++
    if(posx.current * 50 > wrapperRef.current.clientWidth){
      posx.current = 1
      posy.current++
    }
    return{
      w:(-50 * posx.current) - 200,
      h:-50 * posy.current
    }
  })
  setCells(tmpCells)
}

const handleResetPostions = () =>{
  posx.current = 0
  posy.current = 1
}

  useEffect(()=>{
    handleSetColumnsAndRows()    
    if(cells.length > 0 && wrapperRef.current){
      handleResetPostions()
      handleBackgroundPostion()
    }
  },[rows,columns,wrapperRef.current,cells])

  useEffect(()=>{
    handleResetPostions()
    handleBackgroundPostion()
    gsap.fromTo('.about-carousel-cell',{ scale: 0,borderRadius:'100%' }, { scale:1,borderRadius:'0px' ,duration:1 })    
  },[aboutCarouselMainImageSrc])
  
  return (
    <div ref={wrapperRef} className="about-carousel-view my-2 md:my-0 order-2 md:order-1 mx-auto overflow-hidden relative top-0 left-0 flex flex-wrap justify-start items-start w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[700px]">
      {cells.map((c:Cell,i:number)=>{
           return <div key={`cell-${i}`} style={{
                backgroundImage:`url('${aboutCarouselMainImageSrc}')`,
                backgroundSize:`2900%`,
                backgroundPositionX:c.w + 'px',
                backgroundPositionY:c.h + 'px'
            }} className="about-carousel-cell transform-cpu w-[50px] h-[50px]"></div>
      })}
    </div>
  )
}

export default View
