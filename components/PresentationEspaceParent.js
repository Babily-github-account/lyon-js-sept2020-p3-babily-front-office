import styles from './PresentationEspacePro.module.css';
import SimpleWithBabily from './SimpleWithBabily';
import Simulator from './Simulator';
import Cards from './Cards';
import Contact from './Contact';

export default function PresentationEspaceParent() {
  return (
    <>
      <div className={styles.sectionEspace}>
        <section className={styles.sectionPresEspacePro}>
          <h1 className={styles.titlePres}>Vous êtes un Parent</h1>
          <p className={styles.textPresPro}>
            Saviez-vous que des heures de gardes n'étaient pas pourvues dans
            toutes les crèches? Babily est là pour vous faciliter l'accès à
            cette information, et vous met en relation avec la crèche de votre
            choix.
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
