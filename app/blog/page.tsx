'use client'
import React, { useEffect } from 'react'
import { GlobalComponents } from '../components/global'
import { BlogComponents } from '../components/blog'
import useFetchBlogs from '../hooks/useFetchBlogs'


const Blog = () => {

  const [blogs,setBlogs] = useFetchBlogs('/assets/blogs.json')

  return (
    <div className='blog'>
      <GlobalComponents.Path paths={['Blogs & News']}/>  
      <BlogComponents.Nav />
      <div className="md:flex md:justify-between md:items-start">
        <BlogComponents.ItemsComponents.Items blogs={blogs} />    
        <GlobalComponents.SidebarComponents.FullSidebar />
      </div>
    </div>
  )
}

export default Blog

