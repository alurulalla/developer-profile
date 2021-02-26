import React from 'react';
import ContentHeading from '../components/ContentHeading';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div className='relative w-auto h-screen font-body'>
      <Hero />
      <ContentHeading>Explore developer profiles</ContentHeading>
      <Footer />
    </div>
  )
}

export default HomePage;