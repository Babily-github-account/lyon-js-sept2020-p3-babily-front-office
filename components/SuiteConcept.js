import Image from 'next/image';
import styles from './SuiteConcept.module.css';

export default function concept() {
  return (
    <div className={styles.containerNotreConcept}>
      <div className={styles.containerNotreConceptTexte}>
        <h3 className={styles.titleConcept}>Notre concept, c'est vous</h3>
        <p className={styles.paragrapheConcept}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
          <br />
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </p>
      </div>
      <div className={styles.conceptImg}>
        <svg viewBox="0 0 50 50" className={styles.palette}>
          <path d="M46.5,11.5c3.7,18.6-2.5,32-16.3,32S2.7,33,.4,21.2,5.3,4.9,18.9,2.2C29.8.1,43.5-4.2,46.5,11.5Z" />
        </svg>
        <div className={styles.photoFilles}>
          <Image
            src="/images/conceptCestVous.png"
            alt="filles qui montrent le ciel"
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
