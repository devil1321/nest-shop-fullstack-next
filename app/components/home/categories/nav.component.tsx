import React from 'react'

const Nav = () => {
  return (
    <div className='home-categories-nav my-5 flex items-center gap-5'>
      <h2 className="text-2xl font-bold">Categories</h2>
      <p className='hover:text-green-600 cursor-pointer'>Cake & Milk</p>
      <p className='hover:text-green-600 cursor-pointer'>Coffes & Teas</p>
      <p className='hover:text-green-600 cursor-pointer'>Pet Foods</p>
      <p className='hover:text-green-600 cursor-pointer'>Vegetables</p>
    </div>
  )
}

export default Nav
