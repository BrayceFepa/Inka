import React from "react";
import "./Hero.scss";
import FloatingInka from '../../assets/floating-inka.png';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <div className="hero ">
      <div className="hero__content">
        <div className="hero__content__info">
          <h2 className="title">
            <span>INKA</span> - TOME 1
          </h2>
          <div className="description">
            <span>Bienvenue, je suis <a href=" https://fr.wikipedia.org/wiki/Arielle_Kitio_Tsamo" target='_blank' >Arielle KITIO</a> !!!</span>
            <p>
              "INKA" est une œuvre de la collection "Pepites d'Entrepreneurs"
              qui vient du fond de mon cœur et de mon esprit. <br/>Vous avez des
              enfants ou vous connaissez des jeunes chez qui vous aimeriez
              cultiver l'esprit de leadership, de pensée critique, de
              "problem-solving" et progressivement leur infuser l'esprit
              entrepreneurial ? INKA est fait pour vous. <br/> Cette œuvre parle
              d'inclusion, de créativité, de courage, de résilience avec humour
              et profondeur.
            </p>
          </div>
        </div>

        <div className="price">
           <span>10000 FCFA</span> 8500 FCFA
        </div>

      </div>
      <div className="floating-inka">
        <img src={FloatingInka} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
