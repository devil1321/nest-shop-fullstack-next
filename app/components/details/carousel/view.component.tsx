'use client'
import React, { useEffect, useState,useRef, MutableRefObject, use } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as UIActionCreators from '@/app/controller/action-creators/ui.action-creators'
import gsap from 'gsap'
import { bindActionCreators } from 'redux'
import Image from 'next/image'

interface Cell {
    w:number;
    h:number;
}

const View:React.FC<{productImgSrc:string}> = ({productImgSrc}) => {

  
    
    const { detailsCarouselMainImageSrc } = useSelector((state:State) => state.ui)

    const dispatch = useDispatch()
    const UIActions = bindActionCreators(UIActionCreators,dispatch)

    const [images,setImages] = useState<string[]>([
      `${productImgSrc}`,
      '/assets/details/carousel-2.webp',
      '/assets/details/carousel-3.webp',
      '/assets/details/carousel-4.webp'
    ])

    const [count,setCount] = useState<number>(1)


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
const handleInitSelect = () =>{
  const items = document.querySelectorAll('.details-carousel-sm-item-wrapper') as NodeListOf<HTMLDivElement>
  items[0].classList.remove('border-transparent')
  items[0].classList.add('border-green-300')
}

const handleSelect = () =>{
  const items = document.querySelectorAll('.details-carousel-sm-item-wrapper') as NodeListOf<HTMLDivElement>
  items.forEach(i => {
    i.classList.remove('border-green-300')
  })
  items[count - 1].classList.remove('border-transparent')
  items[count - 1].classList.add('border-green-300')
}

const handleNext = () =>{
  if(count < 4){
    setCount(count + 1)
    UIActions.setAboutCarouselImageSrc(images[count - 1])
  }else{
    setCount(1)
    UIActions.setAboutCarouselImageSrc(images[0])
  }
}
const handlePrev = () =>{
  if(count < 2){
    setCount(4)
    UIActions.setAboutCarouselImageSrc(images[3])
  }else{
    setCount(count - 1)
    UIActions.setAboutCarouselImageSrc(images[count - 1])
  }
}

useEffect(()=>{
  handleInitSelect()
},[])

useEffect(()=>{
  UIActions.setAboutCarouselImageSrc(productImgSrc)
  handleSelect()
},[count,productImgSrc])


  useEffect(()=>{
    handleSetColumnsAndRows()    
    if(cells.length > 0 && wrapperRef.current){
      handleResetPostions()
      handleBackgroundPostion()
    }
  },[rows,columns,cells.length])


  useEffect(()=>{
    handleResetPostions()
    handleBackgroundPostion()
    gsap.fromTo('.about-carousel-cell',{ scale: 0,y:-20,borderRadius:'100%' }, { scale:1,y:0,borderRadius:'0px' ,duration:0.3,stagger:0.01 })    
  },[detailsCarouselMainImageSrc])
  
  return (
    <div className="details-carouselp-wrapper">
    <div ref={wrapperRef} className="about-carousel-view my-2 md:my-0 order-2 md:order-1 mx-auto overflow-hidden relative top-0 left-0 flex flex-wrap justify-start items-start w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[700px]">
      {cells.map((c:Cell,i:number)=>{
        return <div key={`cell-${i}`} style={{
          backgroundImage:`url('${detailsCarouselMainImageSrc}')`,
          backgroundSize:`2900%`,
          backgroundPositionX:c.w + 'px',
          backgroundPositionY:c.h + 'px'
        }} className="about-carousel-cell transform-cpu w-[50px] h-[50px]"></div>
      })}
      </div>
      <div className="details-carousel-images flex gap-3 items-center">
        <div className="details-carousel-controls relative top-1/2 -translate-y-1/2 left-0 flex justify-between items-center">
          <div onClick={()=>handlePrev()} className="details-carousel-prev h-8 w-8 rounded-full bg:grenn-300 hover:bg-green-500 font-bold text-white flex justify-center items-center">&lt;</div>
          <div onClick={()=>handleNext()} className="details-carousel-next h-8 w-8 rounded-full bg:grenn-300 hover:bg-green-500 font-bold text-white flex justify-center items-center">&gt;</div>
        </div>
        {images.map((src:string) => <div onClick={()=>UIActions.setDetailsCarouselImageSrc(src)} className='p-2 border-[1px] border-transparent details-item-sm-wrapper'>
                                      <Image src={src} alt='details-carousel-item-image' width={200} height={100} />
                                    </div>)}
      </div>
    </div>
  )
}

export default View
