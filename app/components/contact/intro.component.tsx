import React from 'react'

const Intro = () => {
  return (
    <div className='contact-intro my-12'>
      <h3 className="text-sm text-green-500">How can I help you ?</h3>
      <div className="contact-intro-main-items lg:flex lg:justify-center lg:items-start lg:gap-5">
        <div className="contact-intro-column-1 lg:w-1/3">
            <h1 className="text-4xl font-bold my-6">Let us know how we can help you</h1>
            <p className="text-sm text-gray-500 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <p className="text-sm text-gray-500 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="contact-intro-column-2 lg:flex lg:justify-start lg:items-start lg:flex-wrap lg:gap-5 lg:w-2/3">
          <div className='contact-intro-inner-column lg:w-[45%]'>
            <h3 className="text-md font-bold hover:text-green-500 cursor-pointer">01. Visit Feedback</h3>
            <p className="text-sm text-gray-500 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className='contact-intro-inner-column lg:w-[45%]'>
            <h3 className="text-md font-bold hover:text-green-500 cursor-pointer">02. Employer Services</h3>
            <p className="text-sm text-gray-500 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className='contact-intro-inner-column lg:w-[45%]'>
            <h3 className="text-md font-bold hover:text-green-500 cursor-pointer">03. Billing Inquiries</h3>
            <p className="text-sm text-gray-500 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className='contact-intro-inner-column lg:w-[45%]'>
            <h3 className="text-md font-bold hover:text-green-500 cursor-pointer">04.General Inquiries</h3>
            <p className="text-sm text-gray-500 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
