import Link from 'next/link';
import styles from './PresentationEspacePro.module.css';
import SimpleWithBabily from './SimpleWithBabily';
import Cards from './Cards';

export default function PresentationEspacePro() {
  return (
    <>
      <div className={styles.sectionEspace}>
        <section className={styles.sectionPresEspacePro}>
          <h1 className={styles.titlePres}>
            Vous êtes un professionnel de la petite enfance
          </h1>
          <p className={styles.textPresPro}>
            Toutes vos heures d'accueil ne sont pas pourvues? Babily vous permet
            de mettre à disposition un calendrier partagé avec les parents qui
            recherchent un créneau dans votre établissement.
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
                <b>Boostez vos clients entreprises</b> en répondant à leur
                besoin réel
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
      </div>
      <section className={styles.sectionPres}>
        <SimpleWithBabily pagePro />
        <div className={styles.containerContact}>
          <p className={styles.bien_etre}>Plus de bien être pour tous !</p>
          <Link href="/contact">
            <a className={styles.btn}>Contactez-nous !</a>
          </Link>

          <Cards />
        </div>
      </section>
    </>
  );
}
