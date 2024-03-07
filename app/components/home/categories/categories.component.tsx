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
      <div className="home-categories-items flex gap-3 items-start">
        {/* @ts-ignore */}
        {categories.map((c:any) => <Category category={c} />)}
      </div>
    </div>
  )
}

export default Categories
