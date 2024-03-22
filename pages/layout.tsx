'use client'
import React, { useEffect } from 'react';
import Nav from '@/app/components/global/nav/nav.component';
import Footer from '@/app/components/global/footer/footer.component';
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { State } from '@/app/controller/reducers/root.reducer';

function Layout({ children }:{children:React.ReactNode}) {

  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)
  const { data,route,token } = useSelector((state:State) => state.api)
  const router = useRouter()

  const handleInit = () =>{
    router.push(route)
  }

  useEffect(()=>{
      APIActions.setProducts()
      if(!data){
          APIActions.getUser()
        }
  },[])

  useEffect(()=>{
    handleInit()
  },[token,data])

  return (
    <div className="container">
        <Nav />
        {children}
        <Footer />
    </div>
  );
}

export default Layout;