import React from 'react'
import Header from './header.component'
import Body from './nav-body/body.component'
import Footer from './footer.component'

const Nav = () => {
  return (
    <div className='nav flex flex-col'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Nav
