'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./controller/store";
import { GlobalComponents } from "./components/global";
import { useEffect } from "react";
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from "redux";
import { State } from "./controller/reducers/root.reducer";
import { useRouter,usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Provider store={store}>
            <GlobalComponents.NavComponents.Nav />
              <WithProducts>
                {children}
              </WithProducts>
            <GlobalComponents.FooterComponents.Footer />
          </Provider>
        </div>
      </body>
    </html>
  );
}

const WithProducts = ({children}:{children:React.ReactNode}) =>{

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
        APIActions.setProducts()
        APIActions.getUser()
      }
    }
  },[])

  useEffect(()=>{
    handleInit()
  },[user])

  return(
    <div className="with-redux-container">{children}</div>
  )

}