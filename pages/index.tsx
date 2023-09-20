import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import LandingPage from '@/components/LandingPage';
import { PageContainer } from '@/styles/LandingPage';
import Footer from '@/components/Footer';

const Home = () => {  
  return(
    <PageContainer >
      <Navbar />
      <LandingPage />
      <Footer />
    </PageContainer>
  )
}

export default Home;