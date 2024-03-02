import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div className='footer flex justify-between items-start flex-wrap xl:flex-nowrap lg:gap-5'>
      <div className="footer-column my-2 xl:my-0 lg:-ml-4 w-1/1 lg:w-3/12">
        <Image src="/assets/global/logo.png" alt='logo' width={180} height={180} />
        <p className="text-sm">Awesome grocery store website template</p>
        <div className="footer-content-with-icon flex items-start my-2">
            <Image className='relative top-2 -left-1' src="/assets/global/location-icon-sm.png" alt="location-icon" width={30} height={10} />
            <span>Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
        </div>
        <div className="footer-content-with-icon flex items-start my-2">
            <Image className='mr-2' src="/assets/global/headphones-icon-sm.png" alt="headphones-icon" width={20} height={10} />
            <span>Call Us:(+91) - 540-025-124553</span>
        </div>
        <div className="footer-content-with-icon flex items-start my-2">
            <Image className='mr-2' src="/assets/global/telegram-icon-sm.png" alt="telegram-icon" width={20} height={10} />
            <span>Email:sale@Nest.com</span>
        </div>
        <div className="footer-content-with-icon flex items-start my-2">
            <Image className='mr-2' src="/assets/global/clock-icon-sm.png" alt="clock-icon" width={20} height={10} />
            <span>Hours:10:00 - 18:00, Mon - Sat</span>
        </div>
      </div>
      <div className="footer-column my-2 xl:my-0 w-1/2 lg:w-2/12">
        <h3 className="footer-column-title font-bold text-sm">Company</h3>
        <Link className="block my-2" href="/about">About Us</Link>
        <Link className="block my-2" href="#">Delivery Information</Link>
        <Link className="block my-2" href="#">Privacy Policy</Link>
        <Link className="block my-2" href="#">Terms & Conditions</Link>
        <Link className="block my-2" href="/contact">Contact Us</Link>
        <Link className="block my-2" href="#">Support Center</Link>
        <Link className="block my-2" href="#">Careers</Link>
      </div>
      <div className="footer-column my-2 xl:my-0 w-1/2 lg:w-2/12">
        <h3 className="footer-column-title font-bold text-sm">Account</h3>
        <Link className="block my-2" href="/sign-in">Sign In</Link>
        <Link className="block my-2" href="#">View Cart</Link>
        <Link className="block my-2" href="#">My Wishlist</Link>
        <Link className="block my-2" href="/order-tracking">Track My Order</Link>
        <Link className="block my-2" href="#">Help Ticket</Link>
        <Link className="block my-2" href="#">Shipping Details</Link>
        <Link className="block my-2" href="#">Compare products</Link>
      </div>
      <div className="footer-column my-2 xl:my-0 w-1/2 lg:w-2/12">
        <h3 className="footer-column-title font-bold text-sm">Corporate</h3>
        <Link className="block my-2" href="#">Become a Vendor</Link>
        <Link className="block my-2" href="#">Affiliate Program</Link>
        <Link className="block my-2" href="#">Farm Business</Link>
        <Link className="block my-2" href="#">Farm Careers</Link>
        <Link className="block my-2" href="#">Our Suppliers</Link>
        <Link className="block my-2" href="#">Accessibility</Link>
        <Link className="block my-2" href="#">Promotions</Link>
      </div>
      <div className="footer-column my-2 xl:my-0 w-1/2 lg:w-2/12">
        <h3 className="footer-column-title font-bold text-sm">Popular</h3>
        <Link className="block my-2" href="#">Milk & Flavoured Milk</Link>
        <Link className="block my-2" href="#">Butter and Margarine</Link>
        <Link className="block my-2" href="#">Eggs Substitutes</Link>
        <Link className="block my-2" href="#">Marmalades</Link>
        <Link className="block my-2" href="#">Sour Cream and Dips</Link>
        <Link className="block my-2" href="#">Tea & Kombucha</Link>
        <Link className="block my-2" href="#">Cheese</Link>
      </div>
      <div className="footer-column my-2 xl:my-0 w-1/1 lg:w-2/12">
        <h3 className="text-md font-bold">Install App</h3>
        <div className="footer-app-stores my-10 flex justify-between items-center gap-2">
            <Image src="/assets/global/apple-store.png" alt="apple-store" width={100} height={50} />
            <Image src="/assets/global/google-play-store.png" alt="google-store" width={100} height={50} />
        </div>
        <p className="text-sm">Secured Payment Gateways</p>
      </div>
    </div>
  )
}

export default Main
