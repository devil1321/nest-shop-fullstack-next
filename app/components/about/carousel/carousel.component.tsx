import React from 'react'
import View from './view.component'
import Details from './details.component'

const Carousel = () => {
  return (
    <div className='about-carousel flex flex-col md:flex-row justify-between items-center'>
      <View />
      <Details 
        title='Welcome to Nest'
        paragraph_1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate id est laborum.'
        paragraph_2='Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
        interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
        orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
        lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate id est laborum.'
      />
    </div>
  )
}

export default Carousel
