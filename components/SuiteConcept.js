import Image from 'next/image';
import styles from './SuiteConcept.module.css';

export default function concept() {
  return (
    <div className={styles.containerNotreConcept}>
      <div className={styles.containerNotreConceptTexte}>
        <h3 className={styles.titleConcept}>Notre concept, c'est vous</h3>
        <p className={styles.paragrapheConcept}>
          Un calendrier partagé, accessible publiquement et respectueux des
          exigences de chaque crèche !
          <br />
          Doté d'un système d'alerte{' '}
          <span className={styles.spanConcept}>
            intelligent, juste et instantané
          </span>
          , il permet aux familles de connaître et de reserver les
          disponiblités.
        </p>
      </div>
      <div className={styles.conceptImg}>
        <svg viewBox="0 0 50 50" className={styles.palette}>
          <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
        </svg>
        <div className={styles.photoFilles}>
          <Image
            src="/images/jouet2.png"
            alt="filles qui montrent le ciel"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
