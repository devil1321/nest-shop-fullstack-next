'use client'
import React, { useEffect, useState,useRef, MutableRefObject } from 'react'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'

interface Cell {
    w:number;
    h:number;
}

const View = () => {
    
    const { aboutCarouselMainImageSrc } = useSelector((state:State) => state.ui)
    const [rows,setRows] = useState<number>(0)
    const [columns,setColumns] = useState<number>(0)
    const [cells,setCells] = useState<Cell[]>([])


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
            setRows(6);
            setColumns(6);
        }
        for(let i = 0; i < rows * columns; i++){
            tmpCells.push({w:50,h:50})
        }
        setCells(tmpCells)
    }   
}
  useEffect(()=>{
    handleSetColumnsAndRows()    
  },[rows,columns])

  return (
    <div className="about-carousel-view overflow-hidden relative top-0 left-0 flex flex-wrap w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[700px]">
      {cells.map((c:Cell,i:number)=>
            <div style={{
                backgroundImage:`url('${aboutCarouselMainImageSrc}')`,
                backgroundAttachment:'fixed',
                backgroundSize:'100%',
            }} className="about-carousel-cell-front w-[50px] h-[50px]"></div>
      )}
    </div>
  )
}

export default View
