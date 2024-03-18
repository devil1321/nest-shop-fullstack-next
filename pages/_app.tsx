import React from 'react';
import store from '@/app/controller/store'
import { Provider } from 'react-redux';
import Nav from '@/app/components/global/nav/nav.component';
import Footer from '@/app/components/global/footer/footer.component';

function MyApp({ Component, pageProps }:{Component:any,pageProps:any}) {
  return (
    <Provider store={store}>
        <div className="container">
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </div>
    </Provider>
  );
}

export default MyApp;