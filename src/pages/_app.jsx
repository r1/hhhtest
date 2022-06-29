import '../styles/main.scss'
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
