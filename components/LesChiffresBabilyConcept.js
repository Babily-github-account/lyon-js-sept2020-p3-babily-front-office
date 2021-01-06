import { useSpring, animated } from 'react-spring';
import styles from './LesChiffresBabilyConcept.module.css';

export default function lesChiffresBabilyConcept() {
  const reservations = useSpring({ from: { val: 0 }, to: { val: 900 } });
  const heuresDaccueil = useSpring({ from: { val: 0 }, to: { val: 6500 } });
  const crechespartenaires = useSpring({ from: { val: 0 }, to: { val: 25 } });
  const famillesInscrites = useSpring({ from: { val: 0 }, to: { val: 500 } });
  return (
    <div className={styles.chiffresBabily}>
      <h3 className={styles.titreLesChiffresBabily}>Les chiffres Babily</h3>
      <div className={styles.chiffres}>
        <div className={styles.notion}>
          <svg viewBox="0 0 50 50" className={styles.paletteA1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" className={styles.paletteB1}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div className={styles.chiffreTexte}>
            <div className={styles.chiffre}>
              <animated.span>
                {heuresDaccueil.val.interpolate((val) => Math.floor(val))}
              </animated.span>
            </div>
            <p>heures d'accueil pourvues</p>
          </div>
        </div>

        <div className={styles.notion}>
          <svg viewBox="0 0 50 50" className={styles.paletteA2}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" className={styles.paletteB2}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div className={styles.chiffreTexte}>
            <div className={styles.chiffre}>
              <animated.span>
                {famillesInscrites.val.interpolate((val) => Math.floor(val))}
              </animated.span>
            </div>
            <p>familles inscrites</p>
          </div>
        </div>
        <div className={styles.notion}>
          <svg viewBox="0 0 50 50" className={styles.paletteA3}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <svg viewBox="0 0 50 50" className={styles.paletteB3}>
            <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
          </svg>
          <div className={styles.chiffreTexte}>
            <div className={styles.chiffre}>
              +
              <animated.span>
                {reservations.val.interpolate((val) => Math.floor(val))}
              </animated.span>
            </div>
            <p>réservations</p>
          </div>
        </div>
        <div className={styles.notion}>
          <div>
            <svg viewBox="0 0 50 50" className={styles.paletteA4}>
              <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
            </svg>
            <svg viewBox="0 0 50 50" className={styles.paletteB4}>
              <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
            </svg>
          </div>
          <div className={styles.chiffreTexte}>
            <div className={styles.chiffre}>
              <animated.span>
                {crechespartenaires.val.interpolate((val) => Math.floor(val))}
              </animated.span>
            </div>
            <p>crèches partenaires</p>
          </div>
        </div>
      </div>
    </div>
  );
}
