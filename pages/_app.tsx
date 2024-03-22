import React from 'react';
import store from '@/app/controller/store'
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }:{Component:any,pageProps:any}) {
  return (
    <Provider store={store}>
        <div className="container">
          <Component {...pageProps} />
        </div>
    </Provider>
  );
}

export default MyApp;