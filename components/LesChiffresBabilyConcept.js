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
          <div className={styles.chiffre}>
            <animated.span>
              {heuresDaccueil.val.interpolate((val) => Math.floor(val))}
            </animated.span>
          </div>
          <p>heures d'accueil pourvues</p>
        </div>

        <div className={styles.notion}>
          <div className={styles.chiffre}>
            <animated.span>
              {famillesInscrites.val.interpolate((val) => Math.floor(val))}
            </animated.span>
          </div>
          <p>familles inscrites</p>
        </div>
        <div className={styles.notion}>
          <div className={styles.chiffre}>
            +
            <animated.span>
              {reservations.val.interpolate((val) => Math.floor(val))}
            </animated.span>
          </div>
          <p>réservations</p>
        </div>
        <div className={styles.notion}>
          <div className={styles.chiffre}>
            <animated.span>
              {crechespartenaires.val.interpolate((val) => Math.floor(val))}
            </animated.span>
          </div>
          <p>crèches partenaires</p>
        </div>
      </div>
    </div>
  );
}
