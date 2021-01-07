import styles from './Simulateur.module.css';

export default function Simulateur() {
  return (
    <div className={styles.containerSimulateur}>
      <div className={styles.simulateurTexte}>
        <h3 className={styles.titreSimulateur}>
          Estimer le tarif de ma place en crèche
        </h3>
        <p className={styles.simulateurInformation}>
          Tarif émis à titre indicatif
        </p>
        <a
          href="https://www.caf.fr/allocataires/droits-et-prestations/connaitre-vos-droits-selon-votre-situation/je-fais-garder-mon-enfant-dans-une-creche-ou-en-microcreche-la-caf-va-t-elle-m-aider#:~:text=Le%20montant%20de%20cette%20aide,pas%2085%20%25%20du%20montant%20total."
          target="_blank"
          rel="noreferrer"
          className={styles.lien}
        >
          Plus d'informations
        </a>
      </div>
      <div className={styles.simulateur} />
    </div>
  );
}
