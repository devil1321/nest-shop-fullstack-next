import React from 'react'
import Image from 'next/image'
import Search from './search.component'
import Menu from './menu.component'

const Body = () => {

  
  return (
    <div className="footer-body order-2 md:order-1 px-2 xl:px-0 mt-5 mb-2 md:flex flex-wrap xl:flex-nowrap md:justify-between md:items-center">
      <Image className='my-3 md:my-0' src="/assets/global/logo.png" alt="" width={180} height={180} />
      <Search />
      <Menu />
    </div>
  )
}

export default Body
