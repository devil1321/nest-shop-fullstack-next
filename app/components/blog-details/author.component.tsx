import React from 'react'
import Image from 'next/image'

const Author = () => {
  return (
    <div className='blog-details-author my-12'>
      <div className="blog-details-author-header">
        <div className="blog-details-author flex items-center">
          <Image className='rounded-full' src="/assets/blog-details/profile-1.png" alt='author-image' width={70} height={70} />
          <div className='blog-details-author-details ml-2'>
            <h3 className="text-md font-bold">Barbara Cartland</h3>
            <p className="text-sm text-gray-500">306 posts. Since 2016</p>
          </div>
        </div>
      </div>
      <p className="text-sm mt-5 text-gray-500">Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero</p>
    </div>
  )
}

export default Author
