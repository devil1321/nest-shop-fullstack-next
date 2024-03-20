'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider, useDispatch } from "react-redux";
import store from "./controller/store";
import { GlobalComponents } from "./components/global";
import { useEffect } from "react";
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
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

  useEffect(()=>{
    APIActions.setProducts()
  },[])

  return(
    <div className="with-redux-container">{children}</div>
  )

}