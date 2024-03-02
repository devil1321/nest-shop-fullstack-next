'use client'
import React,{ MutableRefObject, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

const Footer = () => {
  
  const [isMobile,setIsMobile] = useState<boolean>(false)
  const [isPlayingIn,setIsPlayingIn] = useState<boolean>(false)

  const menuRef = useRef() as MutableRefObject<HTMLDivElement>
  const supportRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleOpen = () =>{
    if(!menuRef.current.classList.contains('--open')){
        menuRef.current.classList.add('--open')
        const tl = gsap.timeline()
        if(!isPlayingIn){
            setIsPlayingIn(true)
            gsap.fromTo('.nav-footer-hamburger span:first-of-type',{ rotate:0 },{ rotate:45,  transformOrigin:'7px 1px'})
            gsap.fromTo('.nav-footer-hamburger span:nth-of-type(2)',{ opacity:1 },{ opacity:0 })
            gsap.fromTo('.nav-footer-hamburger span:last-of-type',{ rotate:0 } ,{ rotate:-45,  transformOrigin:'7px 1px'})
            tl.fromTo(menuRef.current,{transform:'translate(-50%,50px)',opacity:0},{transform:'translate(-50%,0px)',opacity:1})
            tl.fromTo('.nav-footer-menu-item',{ opacity:0 },{ opacity:1,stagger:0.2})
            tl.fromTo(supportRef.current,{ opacity:0 },{ opacity:1, onComplete:()=>setIsPlayingIn(false)})
        }
    }else{
        menuRef.current.classList.remove('--open')
        if(!isPlayingIn){
            setIsPlayingIn(true)
            gsap.fromTo('.nav-footer-hamburger span:first-of-type',{ rotate:45 },{ rotate:0,  transformOrigin:'7px 1px'})
            gsap.fromTo('.nav-footer-hamburger span:nth-of-type(2)',{ opacity:0 },{ opacity:1 })
            gsap.fromTo('.nav-footer-hamburger span:last-of-type',{ rotate:-45 } ,{ rotate:0,  transformOrigin:'7px 1px'})
            const tl = gsap.timeline()
            tl.fromTo(supportRef.current,{ opacity:1 },{ opacity:0 })
            tl.fromTo('.nav-footer-menu-item',{ opacity:1 },{ opacity:0,stagger:0.2,reversed:true })
            tl.fromTo(menuRef.current,{transform:'translate(-50%,0px)',opacity:1},{transform:'translate(-50%,50px)',opacity:0,onComplete:()=>setIsPlayingIn(false)})

        }
    }
  }

  const handleResizeAnimation = () =>{
    menuRef.current.classList.remove('--open')
    if(!isMobile){
        const tl = gsap.timeline()
        tl.fromTo('.nav-footer-hamburger span:first-of-type',{ rotate:0 },{ rotate:45,duration:0, transformOrigin:'7px 1px'})
        tl.fromTo('.nav-footer-hamburger span:nth-of-type(2)',{ opacity:1 },{ opacity:0,duration:0})
        tl.fromTo('.nav-footer-hamburger span:last-of-type',{ rotate:0 } ,{ rotate:-45,duration:0, transformOrigin:'7px 1px'})
        tl.fromTo(menuRef.current,{transform:'translate(-50%,0px)',opacity:0},{transform:'translate(0%,0px)',opacity:1,duration:0})
        tl.fromTo('.nav-footer-menu-item',{ opacity:0 },{ opacity:1,duration:0})
        tl.fromTo(supportRef.current,{ opacity:0 },{ opacity:1,duration:0 })
    }else{
        const tl = gsap.timeline()
        tl.fromTo('.nav-footer-hamburger span:first-of-type',{ rotate:45 },{ rotate:0,  transformOrigin:'7px 1px',duration:0})
        tl.fromTo('.nav-footer-hamburger span:nth-of-type(2)',{ opacity:0 },{ opacity:1 ,duration:0})
        tl.fromTo('.nav-footer-hamburger span:last-of-type',{ rotate:-45 } ,{ rotate:0,  transformOrigin:'7px 1px',duration:0})
        tl.fromTo(supportRef.current,{ opacity:1 },{ opacity:0,duration:0 })
        tl.fromTo('.nav-footer-menu-item',{ opacity:1 },{ opacity:0,duration:0 })
        tl.fromTo(menuRef.current,{transform:'translate(-50%,0px)',opacity:1},{transform:'translate(-50%,50px)',opacity:0,duration:0})
    }
  }

  const handleResize = () =>{
    if(typeof window !== 'undefined'){
        if(window.innerWidth < 768) setIsMobile(true)
        window.addEventListener('resize',()=>{
            if(window.innerWidth < 768){
                setIsMobile(true)
            }
            else{
                setIsMobile(false)
            }
        })
    }
  }

  useEffect(()=>{
    handleResize()
    handleResizeAnimation()
  },[])

  useEffect(()=>{
    handleResizeAnimation()
  },[isMobile])

  return (
    <div className='nav-footer order-1 md:order-2 flex justify-between items-center px-5 md:px-0 py-5'>
      <button className='rounded-md lg:ml-2 px-2 py-1 font-bold text-white shadow-sm shadow-green-500 bg-green-500 flex items-center hover:opacity-70'>
        <Image className='mr-2' src="/assets/global/category-icon.png" alt="logo" width={20} height={20} />
        <span>Brose categories</span>
      </button>
      <div onClick={()=>handleOpen()} className="nav-footer-hamburger w-8">
        <span className='block my-1 h-[2px] w-[2x] bg-black'></span>
        <span className='block my-1 h-[2px] w-[2x] bg-black'></span>
        <span className='block my-1 h-[2px] w-[2x] bg-black'></span>
      </div>
      <div ref={menuRef} className="nav-footer-menu flex flex-col justify-center items-center gap-5 md:flex-wrap md:flex-row absolute top-[200px] w-[90%] md:w-fit left-1/2 md:top-0 md:left-0 pb-20 md:pb-0 bg-white rounded-lg shadow-lg shadow-gray-300 md:shadow-none md:relative">
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <Image className='mr-2' src="/assets/global/deals-icon.png" alt='chevron' width={20} height={20}/>
            <span>Deals</span>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <span>Home</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <span>About</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-cent items-center'>
            <span>Shop</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <span>Vendors</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <span>Mega menu</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <span>Blog</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <span>Pages</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
        <Link href="#" className='nav-footer-menu-item flex items-center'>
            <span>Contact</span>
            <Image className='ml-2' src="/assets/global/chevron.png" alt='chevron' width={10} height={10}/>
        </Link>
      </div>
      <div ref={supportRef} className="nav-footer-support w-max absolute bottom-5 left-1/2 -translate-x-1/2 md:relative md:bottom-0 md:left-0 md:-translate-x-0 flex items-center">
        <Image src="/assets/global/headphones-icon.png" alt="headphones-icon" width={50} height={50} />
        <div className="nav-footer-support-content ml-2">
            <h3 className="text-md font-bold text-green-500">1900 - 888</h3>
            <p className='text-gray-400'>24/7 Support Center</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
