import React from 'react'

const Nav = () => {

  const handleTab = (e:any) =>{
    const tabs = document.querySelectorAll('.details-tabs-tab') as NodeListOf<HTMLDivElement>
    const target = e.target.getAttribute('data-target')
    const id = `#details-tabs-tab-${target}`
    const targetTab = document.querySelector(id) as HTMLDivElement
    tabs.forEach((tab:HTMLDivElement) => tab.style.display = 'none')
    targetTab.style.display = 'block'
  }

  return (
    <div className='details-tabs-nav md:w-1/3 flex justify-between items-center'>
      <h3 onClick={(e)=>handleTab(e)} data-target="1" className="cursor-pointer font-bold text-sm py-5 border-b-[2px] border-b-transparent  hover:border-b-green-300">Description</h3>
      <h3 onClick={(e)=>handleTab(e)} data-target="2" className="cursor-pointer font-bold text-sm py-5 border-b-[2px] border-b-transparent  hover:border-b-green-300">Additional Info</h3>
      <h3 onClick={(e)=>handleTab(e)} data-target="3" className="cursor-pointer font-bold text-sm py-5 border-b-[2px] border-b-transparent  hover:border-b-green-300">Vendor</h3>
      <h3 onClick={(e)=>handleTab(e)} data-target="4" className="cursor-pointer font-bold text-sm py-5 border-b-[2px] border-b-transparent  hover:border-b-green-300">Reviews(3)</h3>
    </div>
  )
}

export default Nav
