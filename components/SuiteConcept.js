import Image from 'next/image';
import styles from './SuiteConcept.module.css';

export default function concept() {
  return (
    <div className={styles.containerNotreConcept}>
      <div className={styles.parentImg}>
        <Image
          src="/images/parent.jpg"
          alt="Picture of the author"
          width={400}
          height={300}
        />
      </div>
      <div className={styles.containerNotreConcept2}>
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
    </div>
  );
}
