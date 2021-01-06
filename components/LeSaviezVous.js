import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function LeSaviezVous() {
  const heuresDisponibles = useSpring({ from: { val: 0 }, to: { val: 330 } });
  const placesEnCreche = useSpring({ from: { val: 0 }, to: { val: 12 } });
  const tauxOccupation = useSpring({ from: { val: 0 }, to: { val: 63 } });

  const containerSaviezVous = {
    width: '100%',
    padding: '10%',
  };

  const titreSaviezVous = {
    color: '#fa6870',
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontSize: '30px',
    textDecorationLine: 'overline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#fa6870',
    textDecorationThickness: '15px',
    paddingBottom: '50px',
  };

  const notions = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    minHeight: '',
  };

  const notion = {
    position: 'relative',
    margin: '5% auto',
  };
  const paletteA1 = {
    margin: 'auto',
    fill: 'rgba(250,104,112,1)',
    position: 'absolute',
    width: '53%',
    minWidth: '200px',
    height: 'auto',
    top: '50%',
    bottom: '50%',
    transform: 'translate(-50%, 2%)',
  };
  const paletteB1 = {
    margin: 'auto',
    fill: 'rgba(250,104,112,0.5)',
    position: 'absolute',
    width: '53%',
    minWidth: '200px',
    height: 'auto',
    transform: 'translate(-45%, 4%) rotate(-30deg)',
    top: '50%',
    bottom: '50%',
  };
  const paletteA2 = {
    margin: 'auto',
    fill: 'rgba(255,187,105,1)',
    position: 'absolute',
    width: '53%',
    minWidth: '200px',
    height: 'auto',
    top: '50%',
    bottom: '50%',
    transform: 'translate(-60%, -5%) rotate(55deg)',
  };
  const paletteB2 = {
    margin: 'auto',
    fill: 'rgba(255,187,105,0.5)',
    position: 'absolute',
    width: '53%',
    minWidth: '200px',
    height: 'auto',
    top: '50%',
    bottom: '50%',
    transform: 'translate(-60%, -10%) rotate(110deg)',
  };
  const paletteA3 = {
    margin: 'auto',
    fill: 'rgba(60,132,251,1)',
    position: 'absolute',
    width: '69%',
    minWidth: '200px',
    height: 'auto',
    top: '50%',
    bottom: '50%',
    transform: 'translate(-55%, -5%) rotate(120deg)',
  };
  const paletteB3 = {
    margin: 'auto',
    fill: 'rgba(60,132,251,0.5)',
    position: 'absolute',
    width: '69%',
    minWidth: '200px',
    height: 'auto',
    top: '50%',
    bottom: '50%',
    transform: 'translate(-55%, 5%) rotate(40deg)',
  };
  const chiffreValeur1 = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%)',
    color: 'white',
  };

  const chiffreValeur = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%)',
    color: 'white',
  };
  const nombre = {
    fontSize: '3.5rem',
    fontFamily: 'Montserrat Alternates, sans-serif',
  };
  const valeur = {
    fontSize: '1.6rem',
  };
  const texteExplicatif = {
    padding: '10% 5%',
    fontFamily: 'Krub, sans-serif',
    marginTop: '50px',
    color: 'black',
  };

  const heures = {
    color: '#fa6870',
    fontFamily: 'Krub, sans-serif',
  };

  return (
    <div style={containerSaviezVous}>
      <h3 style={titreSaviezVous}>Le saviez-vous?</h3>
      <div style={notions}>
        <div style={notion}>
          <svg viewBox="0 0 50 50" style={paletteA1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" style={paletteB1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div style={chiffreValeur1}>
            <animated.span style={nombre}>
              {heuresDisponibles.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <p style={valeur}>millions</p>
            <p style={texteExplicatif}>
              D'<span style={heures}>heures</span> d'accueil disponibles en
              France chaque année 12 %
            </p>
          </div>
        </div>

        <div style={notion}>
          <svg viewBox="0 0 50 50" style={paletteA2}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" style={paletteB2}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {placesEnCreche.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span style={valeur}>%</span>
            <p style={texteExplicatif}>
              Des enfants (de 10 semaines à 3 ans) ont une place en crèche
            </p>
          </div>
        </div>
        <div style={notion}>
          <svg viewBox="0 0 50 50" style={paletteA3}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" style={paletteB3}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {tauxOccupation.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span style={valeur}>%</span>
            <p style={texteExplicatif}>
              Le taux d'occupation réel moyen des crèches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
