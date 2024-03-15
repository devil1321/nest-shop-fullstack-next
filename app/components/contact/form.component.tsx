import React from 'react'
import Image from 'next/image'
const Form = () => {

  return (
    <div className="contact-form md:flex md:justify-between md:items-start">
      <form action="" className="contact-form-form mb-2 md:w-2/3">
        <h3 className="text-md text-green-500 font-bold ">Contact Form</h3>
        <h2 className="text-3xl my-4 font-bold">Drop Us a line</h2>
        <p className="text-sm text-gray-500">Your email address will not be published. Required fields are marked *</p>
        <div className="contact-form-fields my-4 flex flex-wrap gap-3">
          <input className='w-[100%] md:w-1/3 bg-white border-[1px] border-gray-200 rounded-md p-2' type="text" placeholder='First Name'/>
          <input className='w-[100%] md:w-1/3 bg-white border-[1px] border-gray-200 rounded-md p-2' type="text" placeholder='Last Name'/>
          <input className='w-[100%] md:w-1/3 bg-white border-[1px] border-gray-200 rounded-md p-2' type="text" placeholder='Your Phone'/>
          <input className='w-[100%] md:w-1/3 bg-white border-[1px] border-gray-200 rounded-md p-2' type="text" placeholder='Email'/>
          <textarea className='bg-white border-[1px] w-[100%] md:w-[68%] border-gray-200 rounded-md p-2' name="" id="" cols={30} rows={6}></textarea>
        </div>
        <button className="w-[100%] md:w-fit px-5 py-4 bg-neutral-700 hover:bg-neutral-950 text-white rounded-md font-bold">Send message</button>
      </form>
      <Image className="md:w-1/3" src="/assets/contact/drop-line.png" alt="form-image" width={600} height={700} />
    </div>
  )
}

export default Form
