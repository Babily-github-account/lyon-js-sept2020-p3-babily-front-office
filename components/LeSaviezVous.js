import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

export default function LeSaviezVous() {
  const heuresDisponibles = useSpring({ from: { val: 0 }, to: { val: 330 } });
  const placesEnCreche = useSpring({ from: { val: 0 }, to: { val: 12 } });
  const tauxOccupation = useSpring({ from: { val: 0 }, to: { val: 63 } });

  const containerSaviezVous = {
    width: '100%',
    padding: '15%',
  };

  const titreSaviezVous = {
    color: '#fa6870',
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontSize: '30px',
    textDecorationLine: 'overline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#fa6870',
    textDecorationThickness: '15px',
    paddingTop: '5%',
    paddingBottom: '7%',
  };

  const notions = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const notion = {
    position: 'relative',
    margin: '50px auto',
  };
  const palette = {
    height: '200px',
  };
  const chiffreValeur = {
    position: 'absolute',
    width: '350px',
    height: '350px',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-55%, -30%)',
    color: 'white',
  };
  const nombre = {
    fontSize: '3.5rem',
    fontFamily: 'Montserrat Alternates, sans-serif',
  };
  const valeur = {
    fontSize: '1.2rem',
  };
  const texte = {
    margin: 'auto',
    padding: '0 50px',
  };

  return (
    <div style={containerSaviezVous}>
      <h3 style={titreSaviezVous}>Le saviez-vous?</h3>
      <div style={notions}>
        <div style={notion}>
          <Image
            src="/images/paletteRouge.png"
            alt="palette rouge"
            width={350}
            height={350}
            style={palette}
          />
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {heuresDisponibles.val.interpolate((val) => Math.floor(val))}
            </animated.span>{' '}
            <p style={valeur}>millions</p>
          </div>
          <p style={texte}>
            D'heures d'accueil disponibles en France chaque année 12 %
          </p>
        </div>

        <div style={notion}>
          <Image
            src="/images/paletteJaune.png"
            alt="palette jaune"
            width={350}
            height={350}
            style={palette}
          />
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {placesEnCreche.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <p style={valeur}>%</p>
          </div>
          <p style={texte}>
            Des enfants (de 10 semaines à 3 ans) ont une place en crèche
          </p>
        </div>
        <div style={notion}>
          <Image
            src="/images/paletteBleue.png"
            alt="palette bleue"
            width={350}
            height={350}
            style={palette}
          />
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {tauxOccupation.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <p style={valeur}>%</p>
          </div>
          <p style={texte}>Le taux d'occupation réel moyen des crèches</p>
        </div>
      </div>
    </div>
  );
}
