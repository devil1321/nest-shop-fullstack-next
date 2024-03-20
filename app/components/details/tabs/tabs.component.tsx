'use client'
import React, { useEffect } from 'react'
import Nav from './nav.component'
import Tab from './tab.component'
const Tabs = () => {

  const handleInit = () =>{
    const tabs = document.querySelectorAll('.details-tabs-tab') as NodeListOf<HTMLDivElement>
    tabs.forEach((tab:HTMLDivElement,index:number) => {
      tab.id = `details-tabs-tab-${index + 1}`
      tab.style.display = 'none'
    })
    tabs[0].style.display = 'block'
  }

  useEffect(()=>{
    handleInit()
  },[])

  return (
    <div className='details-tabs'>
      <Nav />
      <div className="details-tabs-inner">
        <Tab />
        <Tab />
        <Tab />
        <Tab />
      </div>
    </div>
  )
}

export default Tabs
