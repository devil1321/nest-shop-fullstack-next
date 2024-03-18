import React from 'react'
import Image from 'next/image';

interface CommentProps{
  className:string;
  img:string;
  date:string;
  nickname:string;
  content:string;
}

const Comment:React.FC<CommentProps> = ({className,img,date,nickname,content}) => {
  return (
    <div className={`blog-details-comment flex gap-3 ${className}`}>
      <div className="blod-details-comment-profile">
        <Image className='rounded-full' src={img} alt="blod-details-profile-img" width={70} height={70} />
        <h3 className="text-md text-green-500 mt-3 font-bold">{nickname}</h3>
      </div>
      <div className='blog-details-comment-conent text-sm text-gray-500'>
        <p className='my-2'>{date}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Comment
