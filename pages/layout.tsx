'use client'
import React, { useEffect } from 'react';
import Nav from '@/app/components/global/nav/nav.component';
import Footer from '@/app/components/global/footer/footer.component';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { State } from '@/app/controller/reducers/root.reducer';
import { usePathname,useRouter } from 'next/navigation';

function Layout({ children }:{children:React.ReactNode}) {

  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)
  const { user } = useSelector((state:State) => state.api)
  const router = useRouter()
  const pathname = usePathname() 
  
  const handleInit = () =>{
    if(typeof window !== 'undefined'){
      const token = localStorage.getItem('jwt')
      if(pathname !== "/" && !token){
        router.push("/")
      }else if(pathname === '/' && token){
        router.push('/home')
      }
    }
  }
  
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const token = localStorage.getItem('jwt')
      if(token){
        APIActions.getUser()
        APIActions.setProducts()
      }
    }
  },[])

  useEffect(()=>{
    handleInit()
  },[user])

  return (
    <div className="container">
        <Nav />
        {children}
        <Footer />
    </div>
  );
}

export default Layout;