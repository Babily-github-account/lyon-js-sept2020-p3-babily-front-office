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
          className={styles.lienPlusDinfos}
        >
          Plus d'informations
        </a>
      </div>
      <div className={styles.simulateur}>
        <div className={styles.critere}>
          <h6 className={styles.critereTitre}>Nombres d'enfant(s) à charge</h6>
          <div className={styles.nbEnfants}>
            <p className={styles.chiffreEnfants}>1</p>
            <p className={styles.chiffreEnfants}>2</p>
            <p className={styles.chiffreEnfants}>3</p>
            <p className={styles.chiffreEnfants}>4+</p>
          </div>
        </div>
        <div className={styles.critere}>
          <h6 className={styles.critereTitre}>Revenu net mensuel</h6>
          <input />€
        </div>
        <div className={styles.critere}>
          <h6 className={styles.critereTitre}>
            Nombre d'heure(s) de garde par semaine
          </h6>
          <input /> heures
        </div>
        <button type="submit">Calculer</button>
      </div>
    </div>
  );
}
