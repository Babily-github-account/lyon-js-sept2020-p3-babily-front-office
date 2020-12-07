import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../style/Home.css';
import CalendrierHome from '../img/calendrier:HOME.png';
import Formejaune from '../img/forme2:home.png';
import FormeBig from '../img/forme1:home.png';
import ImageFille from '../img/fillette:home.png';
import FormeRouge from '../img/forme3:home.png';
import Image2 from '../img/image2.png';
import Chiffre from '../img/chiffre.png';
import Simulator from '../img/simulator.png';
import Train from '../img/train.png';
import Bandeau from '../img/bandeau.png';
import '../style/Footer.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <img className='formeBig' src={FormeBig} alt='forme jaune 2' />
        <img className='imgFille' src={ImageFille} alt='fillette' />
        <img className='formeJaune' src={Formejaune} alt='forme jaune' />
        <img className='formeRouge' src={FormeRouge} alt='forme rouge' />

        <div className='containerText'>
          <h1 className='titre1'>Et si c'était</h1>
          <div className='ligne1'></div>
          <h1 className='titre2'>juste une heure?</h1>
          <div className='ligne2'></div>
          <p className='soustitre'>
            Trouvez et reservez <span className='rapidement'>rapidement</span>{' '}
            votre place en crèche !
          </p>
          <button className='reserver'>Je réserve!</button>
          <button className='planning'></button>
          <img
            className='planningIcone'
            src={CalendrierHome}
            alt='icone du planning'
          />
        </div>
      </main>
      <img className='fillette2' src={Image2} alt='fille 2' />
      <h1 className='saviezVous'>Le saviez-vous?</h1>
      <div className='ligneSaviez'></div>
      <img className='chiffre' src={Chiffre} alt='chiffre' />
      <p className='textJaune'>
        Des enfants{' '}
        <span className='soustitre2'>(de 10 semaines à 3 ans) </span>ont une
        place en crèche
      </p>
      <p className='textBleu'>Le taux d’occupation réel moyen des crèches</p>
      <p className='textRouge'>
        <span className='hour'>d’heures</span> d’accueil disponibles en France
        chaque année
      </p>

      <div className='containerSimulator'>
        <h1 className='simulatorTitle'>Simulateur de coût</h1>
        <div className='ligne3'></div>
        <p className='soustitreSimulator'>
          Estimez et découvrez le <span className='price'>prix</span> de votre
          place en crèche !
        </p>
        <Link className='simulatorLink' to='/ensavoirplus'>
          En savoir plus
        </Link>
      </div>
      <img className='simulator' src={Simulator} alt='simulateur' />
      <img className='train' src={Train} alt='train' />
      <img className='bandeau' src={Bandeau} alt='Beandeau' />
      <div class='water'>
        <div class='ripple-one'></div>
        <div class='ripple-two'></div>
        <div class='ripple-three'></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
