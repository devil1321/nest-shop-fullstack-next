import React from 'react'

interface ItemProps {
    children:React.ReactNode,
    title:string;
    paragraph:string;
}

const Item:React.FC<ItemProps> = ({children,title,paragraph}) => {
  return (
    <div className='about-provide-item my-5 w-[100%] md:w-1/3 text-center flex flex-col justify-start items-center'>
      <div className="about-provide-item-svg">{children}</div>
      <h3 className="text-md font-bold my-5">{title}</h3>
      <h3 className="text-sm text-gray-500 w-3/4 mx-auto">{paragraph}</h3>
    </div>
  )
}

export default Item
