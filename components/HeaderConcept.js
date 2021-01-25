import styles from './HeaderConcept.module.css';

export default function HeaderConcept() {
  return (
    <div>
      <div className={styles.conceptStart}>
        <div className={styles.containerHead}>
          <h1 className={styles.titleHead}>Découvrez Babily</h1>
        </div>
      </div>
      <div className={styles.containerSousTitle}>
        <h5 className={styles.introduction}>
          “ Simplifions l’accueil des enfants par un véritable service aux
          familles et une optimisation de la gestion des places ! ”
        </h5>
      </div>
    </div>
  );
}
