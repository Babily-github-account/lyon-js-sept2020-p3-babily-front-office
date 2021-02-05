import styles from './IntroducingToCompanies.module.css';
import SimpleWithBabily from './SimpleWithBabily';
import Simulator from './Simulator';
import Cards from './Cards';
import Contact from './Contact';

export default function IntroducingToParents() {
  return (
    <>
      <div className={styles.sectionArea}>
        <section className={styles.sectionAreaPro}>
          <h1 className={styles.titlePres}>Vous êtes un Parent</h1>
          <p className={styles.textPresPro}>
            Saviez-vous que des heures de gardes n'étaient pas pourvues dans
            toutes les crèches? Babily est là pour vous faciliter l'accès à
            cette information, et vous met en relation avec la crèche de votre
            choix.
          </p>
          <div className={styles.planePaper} />
        </section>
        <section className={styles.sectionPresBabily}>
          <div className={styles.presCradle}>
            <div className={styles.titleCradle}>
              Trouver une place en crèche
            </div>
            <div className={styles.textBabily}>
              <p>
                C'est <b>complexe</b> et <b>fastidieux</b>
              </p>
              <hr className={styles.redLine} />
              <p>
                Mode de garde <b>exclusif</b>
              </p>
              <hr className={styles.redLine} />
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
              <hr className={styles.plusBlueHorizontal} />
              <hr className={styles.plusBlueVertical} />
              <p>
                <b>Réservation ponctuelle</b> d'une place
              </p>
              <hr className={styles.plusBlueHorizontal} />
              <hr className={styles.plusBlueVertical} />
              <p>
                Vous êtes <b>prévenus automatiquement</b> dès qu'une place se
                libère
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.sectionPres}>
        <SimpleWithBabily pageParent />
        <Simulator />
        <Contact />

        <div className={styles.containerContact}>
          <Cards />
        </div>
      </section>
    </>
  );
}
