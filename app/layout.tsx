'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider } from "react-redux";
import store from "./controller/store";
import { GlobalComponents } from "./components/global";

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
            <GlobalComponents.NavComponents.Nav />
            {children}
            <GlobalComponents.FooterComponents.Footer />
          </Provider>
        </div>
      </body>
    </html>
  );
}
