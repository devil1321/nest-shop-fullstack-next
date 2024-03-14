import React from 'react'
import Image from 'next/image'
const SolutionImage = () => {
  return (
    <div className='about-solution-image md:w-1/2'>
      <Image src="/assets/about/partner-image.png" alt="solution-image" width={700} height={600} />
    </div>
  )
}

export default SolutionImage
