import React, { useState } from 'react';

import ContentHeading from '../components/ContentHeading';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import classNames from 'classnames';
import Modal from '../components/Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAddDeveloper = () => {
    console.log('from homepage');
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  }

  return (
    <>
      {isModalOpen && (
        <div className='flex items-center justify-center'>
          <Modal modalClose={onAddDeveloper} />
        </div>
      )}
      <div className={classNames('relative w-auto h-screen font-body', {
        'opacity-50': isModalOpen,
        'overflow-y-hidden': isModalOpen,

      })}>
        <Hero isModalOpen={isModalOpen} />
        <ContentHeading onAddDeveloper={onAddDeveloper}>Explore developer profiles</ContentHeading>
        <Footer />
      </div>
    </>
  )
}

export default HomePage;