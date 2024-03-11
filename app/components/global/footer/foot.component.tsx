import React from 'react'
import Image from 'next/image'

const Foot = () => {
  return (
    <div className='footer-foot mt-5 py-2 border-t-[1px] border-gray-300 md:flex md:justify-between md:items-center'>
      <div className="footer-foot-col md:w-1/3">
        <p className="text-sm text-gray-500">© 2022, Nest - HTML Ecommerce Template</p>
        <p className="text-sm text-gray-500">All rights reserved</p>
      </div>
      <div className="footer-foot-col md:w-1/3 flex gap-3">
        <div className="footer-foot-support flex items-center gap-3">
          <Image src='/assets/global/phone.png' alt='phone' width={30} height={30} />
          <div className="footer-foot-support-details">
            <h3 className="text-green-500 font-bold">1900 - 6666</h3>
            <p className="text-sm text-gray-500">Working 8:00 - 22:00</p>
          </div>
        </div>
        <div className="footer-foot-support flex items-center gap-3">
          <Image src='/assets/global/phone.png' alt='phone' width={30} height={30} />
          <div className="footer-foot-support-details">
            <h3 className="text-green-500 font-bold">1900 - 8888</h3>
            <p className="text-sm text-gray-500">24/7 Support Center</p>
          </div>
        </div>
      </div>
      <div className="footer-foot-col md:w-1/3">
        <div className="footer-foot-icons flex justify-center md:justify-end items-center gap-2">
          <h3 className="font-bold text-md mx-2">Follow us</h3>
          <Image src="/assets/global/facebook.png" alt="social-icon-facebook" width={20} height={20} /> 
          <Image src="/assets/global/twitter.png" alt="social-icon-twitter" width={20} height={20} /> 
          <Image src="/assets/global/instagram.png" alt="social-icon-instagram" width={20} height={20} /> 
          <Image src="/assets/global/youtube.png" alt="social-icon-youtube" width={20} height={20} /> 
          <Image src="/assets/global/pinterest.png" alt="social-icon-pinterest" width={20} height={20} /> 
        </div>
        <p className="text-sm text-center md:text-right text-gray-500">Up to 15% discount on your first subscribe</p>
      </div>
    </div>
  )
}

export default Foot
