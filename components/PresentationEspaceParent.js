// import Link from 'next/link';
// import Image from 'next/image';
import styles from './PresentationEspacePro.module.css';
import CestSimpleAvecBabily from './CestSimpleAvecBabily';
import Simulateur from './Simulateur';
import Cards from './cards';
import Contact from './Contact';

export default function PresentationEspaceParent() {
  return (
    <>
      <section className={styles.sectionPresEspacePro}>
        <h1 className={styles.titlePres}>Vous êtes un Parent</h1>
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
            Trouver une place en crèche
          </div>
          <div className={styles.textBabily}>
            <p>
              C'est <b>complexe</b> et <b>fastidieux</b>
            </p>
            <hr className={styles.ligneRouge} />
            <p>
              Mode de garde <b>exclusif</b>
            </p>
            <hr className={styles.ligneRouge} />
            <p>
              Les <b>processus sont longs</b>
            </p>
          </div>
        </div>
        <div className={styles.presBabily}>
          <div className={styles.titleBabily}>Aujourd'hui avec Babily :</div>
          <div className={styles.textBabily}>
            <p>
              C'est <b>gratuit</b> et <b>facile</b> d'utilisation
            </p>
            <hr className={styles.plusBleuHorizontal} />
            <hr className={styles.plusBleuVertical} />
            <p>
              <b>Réservation ponctuelle</b> d'une place
            </p>
            <hr className={styles.plusBleuHorizontal} />
            <hr className={styles.plusBleuVertical} />
            <p>
              Vous êtes <b>prévenus automatiquement</b> dès qu'une place se
              libère
            </p>
          </div>
        </div>
      </section>
      <CestSimpleAvecBabily pageParent />
      <Simulateur />
      <Contact />

      <div className={styles.containerContact}>
        <Cards />
      </div>
    </>
  );
}
