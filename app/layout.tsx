'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider } from "react-redux";
import store from "./controller/store";
import { NavComponents } from "./components/global/nav";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Provider store={store}>
            <NavComponents.Nav />
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}
