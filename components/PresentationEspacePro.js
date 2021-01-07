// import Link from 'next/link';
import Image from 'next/image';
import styles from './PresentationEspacePro.module.css';

export default function PresentationEspacePro() {
  return (
    <>
      <section className={styles.sectionPresEspacePro}>
        <h1 className={styles.titlePres}>
          Vous êtes un professionnel de la petite enfance
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <Image
          className={styles.avionPapier}
          src="/images/avionPapier.png"
          alt="Avion en papier"
          width={350}
          height={200}
        />
      </section>
      <section className={styles.sectionPresBabily}>
        <div className={styles.presBerceaux}>
          <div className={styles.titleBerceaux}>
            Les berceaux entreprises sont...
          </div>
          <p>
            Une <b>commercialisation complexe</b>
          </p>
          <p>
            Des réservations à l’année, <b>sans garantie d’occupations</b>
          </p>
          <p>
            Une gestion inévitable de <b>l’accueil occasionnel</b>
          </p>
          <p>
            Une <b>charge administrative</b>, deportant les équipes de{' '}
            <b>leur mission première</b>
          </p>
        </div>
        <div className={styles.presBabily}>
          <div className={styles.titleBabily}>Aujourd'hui avec Babily :</div>
          <p>
            <b>Boostez vos clients entreprises</b> en répondant à leur besoin
            réel
          </p>
          <p>
            <b>Optimiser votre taux d’occupation</b> à l’aide de votre
            calendrier partagé
          </p>
          <p>
            <b>Recentrez votre équipe</b> sur le coeur de metier : bébé !
          </p>
        </div>
      </section>
    </>
  );
}
