import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './DidYouKnow.module.css';

export default function DidYouKnow() {
  const availableHours = useSpring({ from: { val: 0 }, to: { val: 330 } });
  const placeInNursery = useSpring({ from: { val: 0 }, to: { val: 12 } });
  const occupationRate = useSpring({ from: { val: 0 }, to: { val: 63 } });

  return (
    <div className={styles.containerDidYouKnow}>
      <h3 className={styles.titleDidYouKnow}>Le saviez-vous?</h3>
      <div className={styles.notions}>
        <div className={styles.notion}>
          <svg viewBox="0 0 50 50" className={styles.paletteA1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" className={styles.paletteB1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div className={styles.numberValue1}>
            <animated.span className={styles.number}>
              {availableHours.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <p className={styles.value}>millions</p>
            <p className={styles.explanation}>
              D'<span className={styles.hours}>heures</span> d'accueil
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
          <div className={styles.numberValue}>
            <animated.span className={styles.number}>
              {placeInNursery.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span className={styles.value}>%</span>
            <p className={styles.transparentValue}>x</p>
            <p className={styles.explanation}>
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
          <div className={styles.numberValue}>
            <animated.span className={styles.number}>
              {occupationRate.val.interpolate((val) => Math.floor(val))}
            </animated.span>
            <span className={styles.value}>%</span>
            <p className={styles.transparentValue2}>x</p>
            <p className={styles.explanation}>
              Le taux d'occupation réel moyen des crèches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
