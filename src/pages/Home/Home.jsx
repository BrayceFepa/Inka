import React from 'react'
import Buttons from '../../components/Buttons/Buttons';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import './Home.scss';
import Arielle from '../../assets/floating-arielle.png';
import Inka from '../../assets/floating-inka2.png';

const Home = () => {

  const transition = { duration: 1, type: 'spring' };

  return (
    <div className='home container'>
      <Header />
      <div className="images">
          <div className="arirlle">
            <img src={Arielle} alt="" />
          </div>
          <div className="inka">
            <img src={Inka} alt="" />
          </div>
        </div>
      <Hero />
      <Buttons/>
    </div>
  );
}

export default Home;