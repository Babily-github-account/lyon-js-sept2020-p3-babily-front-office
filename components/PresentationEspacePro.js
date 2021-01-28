import Link from 'next/link';
import styles from './PresentationEspacePro.module.css';
import CestSimpleAvecBabily from './CestSimpleAvecBabily';
import Cards from './cards';

export default function PresentationEspacePro() {
  return (
    <>
      <section className={styles.sectionPresEspacePro}>
        <h1 className={styles.titlePres}>
          Vous êtes un professionnel de la petite enfance
        </h1>
        <p className={styles.textPresPro}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className={styles.avionPapier} />
      </section>
      <section className={styles.sectionPresBabily}>
        <div className={styles.presBerceaux}>
          <div className={styles.titleBerceaux}>
            Les berceaux entreprises sont...
          </div>
          <div className={styles.textBabily}>
            <p>
              Une <b>commercialisation complexe</b>
            </p>
            <hr className={styles.ligneRouge} />
            <p>
              Des réservations à l’année, <b>sans garantie d’occupations</b>
            </p>
            <hr className={styles.ligneRouge} />
            <p>
              Une gestion inévitable de <b>l’accueil occasionnel</b>
            </p>
            <hr className={styles.ligneRouge} />
            <p>
              Une <b>charge administrative</b>, deportant les équipes de{' '}
              <b>leur mission première</b>
            </p>
          </div>
        </div>
        <div className={styles.presBabily}>
          <div className={styles.titleBabily}>Aujourd'hui avec Babily :</div>
          <div className={styles.textBabily}>
            <p>
              <b>Boostez vos clients entreprises</b> en répondant à leur besoin
              réel
            </p>
            <hr className={styles.plusBleuHorizontal} />
            <hr className={styles.plusBleuVertical} />
            <p>
              <b>Optimiser votre taux d’occupation</b> à l’aide de votre
              calendrier partagé
            </p>
            <hr className={styles.plusBleuHorizontal} />
            <hr className={styles.plusBleuVertical} />
            <p>
              <b>Recentrez votre équipe</b> sur le coeur de metier : bébé !
            </p>
          </div>
        </div>
      </section>

      <CestSimpleAvecBabily pagePro />
      <div className={styles.containerContact}>
        <p className={styles.bien_etre}>Plus de bien être pour tous !</p>
        <Link href="/contact">
          <a className={styles.btn}>Contactez-nous !</a>
        </Link>

        <Cards />
      </div>
    </>
  );
}
