import React from 'react'
import Image from 'next/image';

interface BlogImageProps{
  img:string;
  title:string;
  views:number;
}

const BlogImage:React.FC<BlogImageProps> = ({img,title,views}) => {
  return (
    <div className='blog-details-image'>
      <div className="blog-details-inner-image-wrapper mx-auto w-1/2">
        <Image className='block mx-auto' src={img} alt='blog-image' width={1200} height={500} />
      </div>
      <p className="text-sm text-gray-500 text-center">{views} views</p>
      <h1 className="font-bold text-4xl text-center">{title}</h1>
    </div>
  )
}

export default BlogImage
