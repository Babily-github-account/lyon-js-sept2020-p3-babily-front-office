/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import styles from './Cards.module.css';

export default function Cards() {
  return (
    <div>
      <div className={styles.containerCards}>
        <div className={styles.cards}>
          <p className={styles.textCards}>
            “ Très satisfaite ! Les repères de l’enfant restent une priorité.
            Très utile pour les contrats de moins de 5 jours par exemple. Cela
            me demandait beaucoup de travail.”
          </p>

          <h5 className={styles.cardsName}>Sandrine Lepatre</h5>
          <h6 className={styles.cardsFrom}>
            Fondatrice et Gestionnaire de La Petite Bulle <br /> Micro-crèche
            privée PAJE Craponne (69 Rhône)
          </h6>
        </div>
        <div className={styles.cards}>
          <p className={styles.textCards}>
            “ Nous utilisons Babily depuis 2018, tout en respectant notre projet
            pédagogique et fonctionnement. Les parents sont ravis et l’équipe
            aussi car c’est une charge en moins. ”
          </p>
          <h5 className={styles.cardsName}>Amandine Brocard</h5>
          <h6 className={styles.cardsFrom}>
            Directrice et EJE de Planète Câlins <br />
            Crèche inter-entreprise PSU Aéroport de Lyon, Colombier-Saugnieu (69
            Rhône)
          </h6>
        </div>
      </div>
      <Link href="/mentions">
        <p className={styles.linkCards}>Voir les témoignages</p>
      </Link>
    </div>
  );
}
