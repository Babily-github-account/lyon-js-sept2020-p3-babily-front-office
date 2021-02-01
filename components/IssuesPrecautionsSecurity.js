import Image from 'next/image';
import styles from './IssuesPrecautionsSecurity.module.css';

export default function IssuesPrecautionsSecurity() {
  return (
    <div className={styles.containerBackground}>
      <div className={styles.containerParagraph}>
        <div className={styles.containerImg}>
          <Image
            src="/images/concept1.jpg"
            alt="children playing"
            width={700}
            height={455}
          />
        </div>
        <div className={styles.containerSubtitle}>
          <h3 className={styles.titleParagraph}>Les enjeux</h3>
          <p className={styles.paragraphConcept}>
            + Offrir <b>transparence</b> et <b>accessibilité</b> à la place en
            crèche <br />+ <b>Fluidifier</b> la gestion des disponibilités
            <br />+ Décrocher des <b>budgets</b> additionels <br />+
            <b> Libérer du temps</b> pour les relations et les projets <br />+
            <b> Améliorer</b> le service aux familles <br />
          </p>
        </div>
      </div>
      <div className={styles.containerParagraph}>
        <div className={styles.containerSubtitle}>
          <h3 className={styles.titleParagraph}>Les précautions</h3>
          <p className={styles.paragraphConcept}>
            + Veiller à la <b>stabilité affective </b>de l'enfant <br />+
            Préserver les <b>échanges humains</b> importants <br />+ Maintenir
            <b>l'équilibre</b> des groupes d'âges <br />+ <b>Considerez</b> les
            spécificités et professionnelles de chacun <br />+ Affiner la{' '}
            <b>pertinence des alertes</b> aux familles <br />
          </p>
        </div>
        <div className={styles.containerImg}>
          <Image
            src="/images/concept2.jpg"
            alt="children playing"
            width={700}
            height={455}
          />
        </div>
      </div>
      <div className={styles.containerParagraph}>
        <div className={styles.containerImg}>
          <Image
            src="/images/concept3.jpg"
            alt="children playing"
            width={700}
            height={455}
          />
        </div>
        <div className={styles.containerSubtitle}>
          <h3 className={styles.titleParagraph}>En securité</h3>
          <p className={styles.paragraphConcept}>
            Nous avons à coeur de <b>vous protéger</b>, c'est pour quoi Babily
            dévellope son application avec les meilleurs <b>outils</b> de
            protection de données. <br />
          </p>
        </div>
      </div>
    </div>
  );
}
