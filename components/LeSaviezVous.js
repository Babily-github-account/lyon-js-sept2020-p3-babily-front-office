import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

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
    paddingBottom: '7%',
  };

  const notions = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
  };

  const notion = {
    position: 'relative',
    margin: '50px auto',
  };
  const palette = {
    margin: 'auto',
  };
  const chiffreValeur = {
    position: 'absolute',
    width: '300px',
    height: '300px',
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
  const texte = {
    margin: 'auto',
    paddingLeft: '20%',
    paddingRight: '20%',
  };

  return (
    <div style={containerSaviezVous}>
      <h3 style={titreSaviezVous}>Le saviez-vous?</h3>
      <div style={notions}>
        <div style={notion}>
          <Image
            src="/images/paletteRouge.png"
            alt="palette rouge"
            width={300}
            height={300}
            style={palette}
          />
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {heuresDisponibles.val.interpolate((val) => Math.floor(val))}
            </animated.span>
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
            width={300}
            height={300}
            style={palette}
          />
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {placesEnCreche.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span style={valeur}>%</span>
          </div>
          <p style={texte}>
            Des enfants (de 10 semaines à 3 ans) ont une place en crèche
          </p>
        </div>
        <div style={notion}>
          <Image
            src="/images/paletteBleue.png"
            alt="palette bleue"
            width={300}
            height={300}
            style={palette}
          />
          <div style={chiffreValeur}>
            <animated.span style={nombre}>
              {tauxOccupation.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span style={valeur}>%</span>
          </div>
          <p style={texte}>Le taux d'occupation réel moyen des crèches</p>
        </div>
      </div>
    </div>
  );
}
