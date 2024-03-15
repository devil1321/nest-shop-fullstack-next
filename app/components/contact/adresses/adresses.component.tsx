import React from 'react'
import Item from './item.component'

const Addresses = () => {
  return (
    <div className='contact-adresses mb-12 md:flex md:justify-around md:items-start'>
        <Item 
            title="Office"
            address="205 North Michigan Avenue, Suite 810"
            zip="Chicago, 60601, USA"
            phone="Phone: (123) 456-7890"
            email="Email: contact@Evara.com"
         />
        <Item 
            title="Studio"
            address="205 North Michigan Avenue, Suite 810"
            zip="Chicago, 60601, USA"
            phone="Phone: (123) 456-7890"
            email="Email: contact@Evara.com"
         />
        <Item 
            title="Shop"
            address="205 North Michigan Avenue, Suite 810"
            zip="Chicago, 60601, USA"
            phone="Phone: (123) 456-7890"
            email="Email: contact@Evara.com"
         />
    </div>
  )
}

export default Addresses
