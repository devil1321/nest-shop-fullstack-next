import React from 'react'

const Form = () => {
  return (
    <div className='blog-details-form-wrapper'>
      <h3 className="text-3xl font-bold my-5">Leave a comment</h3>
      <form action="" className="blog-details-form md:w-3/4">
        <textarea name="" id="" cols={30} rows={10} className="rounded-md border-[1px] border-gray-300 w-[100%] h-[300px]"></textarea>
        <div className="flex justify-between gap-2">
          <input className='p-2 w-1/2 rounded-md border-[1px] border-gray-300' type="text" placeholder='Name'/>
          <input className='p-2 w-1/2 rounded-md border-[1px] border-gray-300' type="email" name="" id="" placeholder='Email' />
        </div>
        <input type="text" className='w-[100%] p-2 mt-2 rounded-md border-[1px] border-gray-300' placeholder='Website'/>
      </form>
    </div>
  )
}

export default Form
