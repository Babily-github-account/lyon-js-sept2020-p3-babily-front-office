import Image from 'next/image';
import styles from './GrandTitreConcept.module.css';

export default function GrandTitreConcept() {
  return (
    <div className={styles.containerBackground}>
      <div className={styles.containerParagraphe}>
        <div className={styles.containerImg}>
          <Image
            src="/images/concept1.jpg"
            alt="fillette sur un crayon"
            width={700}
            height={455}
          />
        </div>
        <div className={styles.containerSousTitre}>
          <h3 className={styles.titleParagraphe}>Les enjeux</h3>
          <p className={styles.paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
        </div>
      </div>
      <div className={styles.containerParagraphe}>
        <div className={styles.containerSousTitre}>
          <h3 className={styles.titleParagraphe}>Les précautions</h3>
          <p className={styles.paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </p>
        </div>
        <div className={styles.containerImg}>
          <Image
            src="/images/concept2.jpg"
            alt="Mains d'un pere et son bebe"
            width={700}
            height={455}
            className={styles.photoBbPapa}
          />
        </div>
      </div>
      <div className={styles.containerParagraphe}>
        <div className={styles.containerImg}>
          <Image
            src="/images/concept3.jpg"
            alt="bebe qui dort"
            width={700}
            height={455}
            className={styles.photoBbSecurite}
          />
        </div>
        <div className={styles.containerSousTitre}>
          <h3 className={styles.titleParagraphe}>En securité</h3>
          <p className={styles.paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </p>
        </div>
      </div>
    </div>
  );
}
