import React from 'react'
import Buttons from '../../components/Buttons/Buttons';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import './Home.scss';

const Home = () => {

  const transition = { duration: 1, type: 'spring' };

  return (
    <div className='home container'>
      <Header />
      <Hero />
      <Buttons/>
    </div>
  );
}

export default Home;