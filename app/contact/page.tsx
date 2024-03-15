import React from 'react'
import { GlobalComponents } from '../components/global'
import { ContactComponents } from '../components/contact'

const Contact = () => {
  return (
    <div className='contact'>
      <ContactComponents.Intro />
      <ContactComponents.Map />
      <ContactComponents.AddressesComponents.Addresses />
      <ContactComponents.Form />
      <GlobalComponents.Banner 
        img="/assets/about/about-footer.png" 
        heading="Stay home & get your daily needs from our shop" 
        paragraph="Start You'r Daily Shopping with Nest Mart" 
      />
    </div>
  )
}

export default Contact
