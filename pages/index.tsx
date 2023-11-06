import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import LandingPage from '@/components/LandingPage';
import { PageContainer } from '@/styles/LandingPage';
import Footer from '@/components/Footer';

const Home = () => {  
  return(
    <PageContainer >
            <Head>
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P626JFWQBK"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-P626JFWQBK');
          `}
        </script>
      </Head>
      <Navbar />
      <LandingPage />
      <Footer />
    </PageContainer>
  )
}

export default Home;