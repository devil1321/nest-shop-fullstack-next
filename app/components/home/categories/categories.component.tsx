'use client'
import React from 'react'
import axios from 'axios'
import Nav from './nav.component'
import Category from './category.component'
import useFetchCategories from '@/app/hooks/useFetchCategories'

const Categories = () => {

  const [categories,setCategories] = useFetchCategories('/assets/categories.json')

  return (
    <div className='home-categories'>
      <Nav />
      <div className="home-categories-items flex flex-wrap xl:flex-nowrap justify-start gap-1 md:gap-3 md:items-start">
        {/* @ts-ignore */}
        {categories.map((c:any,i:number) => <Category key={`category-${c}-${i}`} category={c} />)}
      </div>
    </div>
  )
}

export default Categories
