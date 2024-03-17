import React from 'react'
import Image from 'next/image';
import * as Intefaces from '@/app/controller/interfaces'
import Link from 'next/link';

interface ItemProps {
  blog:Intefaces.Blog
}

const Item:React.FC<ItemProps> = ({blog}) => {
  return (
    <Link className='w-[100%] md:w-[45%] lg:w-[30%]' href="/blog-details/[id]" as={`/blog-details/${blog.id}`}>
    <div className='blog-item  flex flex-col justify-start items-center'>
      <Image className='rounded-lg' src={blog.img} alt="blog-image" width={300} height={300} />
      <div className="blog-item-details">
        <p className="text-sm text-center text-gray-500">{blog.category}</p>
        <h3 className="text-md font-bold text-center">{blog.title}</h3>
        <p className='flex gap-3'>
          <span className='text-sm text-gray-500'>{blog.date}</span>
          <span className='text-sm text-gray-500'>{(blog.views / 1000).toFixed(0)}K views</span>
          <span className='text-sm text-gray-500'>{blog.read_len} read length</span>
        </p>
      </div>
    </div>
    </Link>
  )
}

export default Item
