import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Category:React.FC<{category:any}> = ({category}) => {

  return (
    <Link href="#">
        <div className='home-categories-category w-1/10'>
          <div className="home-categories-category-img-wrapper w-[90px] h-[90px] flex justify-center items-center">
            <Image src={category?.img} alt="category-image" width={100} height={100} />
          </div>
          <h3 className="text-sm font-bold text-center min-w-fit">{category?.category}</h3>
        </div>
    </Link>
  )
}

export default Category
