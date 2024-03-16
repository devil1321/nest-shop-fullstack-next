import React from 'react'
import Item from './item.component'
import * as Interfaces from '@/app/controller/interfaces'

const Items:React.FC<{blogs:any}> = ({blogs}) => {
  return (
    <div className='blog-items w-[100%] md:w-[70%] lg:w-[80%] flex flex-wrap justify-between items-start gap-3'>
      {blogs.map((b:Interfaces.Blog) => <Item blog={b} />)}
    </div>
  )
}

export default Items


 