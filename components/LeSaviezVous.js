import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './LeSaviezVous.module.css';

export default function LeSaviezVous() {
  const heuresDisponibles = useSpring({ from: { val: 0 }, to: { val: 330 } });
  const placesEnCreche = useSpring({ from: { val: 0 }, to: { val: 12 } });
  const tauxOccupation = useSpring({ from: { val: 0 }, to: { val: 63 } });

  return (
    <div className={styles.containerSaviezVous}>
      <h3 className={styles.titreSaviezVous}>Le saviez-vous?</h3>
      <div className={styles.notions}>
        <div className={styles.notion}>
          <svg viewBox="0 0 50 50" className={styles.paletteA1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" className={styles.paletteB1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div className={styles.chiffreValeur1}>
            <animated.span className={styles.nombre}>
              {heuresDisponibles.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <p className={styles.valeur}>millions</p>
            <p className={styles.texteExplicatif}>
              D'<span className={styles.heures}>heures</span> d'accueil
              disponibles en France chaque année 12 %
            </p>
          </div>
        </div>

        <div className={styles.notion}>
          <svg viewBox="0 0 50 50" className={styles.paletteA2}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" className={styles.paletteB2}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div className={styles.chiffreValeur}>
            <animated.span className={styles.nombre}>
              {placesEnCreche.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span className={styles.valeur}>%</span>
            <p className={styles.valeurTransparente}>x</p>
            <p className={styles.texteExplicatif}>
              Des enfants (de 10 semaines à 3 ans) ont une place en crèche
            </p>
          </div>
        </div>
        <div className={styles.notion}>
          <svg viewBox="0 0 50 50" className={styles.paletteA3}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" className={styles.paletteB3}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div className={styles.chiffreValeur}>
            <animated.span className={styles.nombre}>
              {tauxOccupation.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span className={styles.valeur}>%</span>
            <p className={styles.valeurTransparente2}>x</p>
            <p className={styles.texteExplicatif}>
              Le taux d'occupation réel moyen des crèches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
