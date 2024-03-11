import React from 'react'

const Nav = () => {
  return (
    <div className='home-products-inner-nav px-2 md:px-0 flex flex-wrap justify-between items-center xl:flex-nowrap'>
      <div className="home-products-inner-nav-item text-md font-bold w-1/5">Top Selling</div>
      <div className="home-products-inner-nav-item text-md font-bold w-1/5">Trending Products</div>
      <div className="home-products-inner-nav-item text-md font-bold w-1/5">Recently added</div>
      <div className="home-products-inner-nav-item text-md font-bold w-1/5">Top Rated</div>
    </div>
  )
}

export default Nav
