'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider, useDispatch } from "react-redux";
import store from "./controller/store";
import { GlobalComponents } from "./components/global";
import { useEffect } from "react";
import * as APIActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from "redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto relative top-0 left-0">
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
  const apiActions = bindActionCreators(APIActions,dispatch)

  useEffect(()=>{
    apiActions.setProducts()
  },[])

  return(
    <div className="with-redux-container">{children}</div>
  )

}