import React from 'react';
import Link from 'next/link';
import styles from './CestQuoiBabily.module.css';

export default function CestQuoiBabily() {
  return (
    <div className={styles.cestQuoiBabily}>
      <div className={styles.container}>
        <h3 className={styles.titre}>C'est quoi Babily?</h3>
        <p className={styles.definition}>
          Nous sommes{' '}
          <span className={styles.spanDecouvrir}>
            un système de réservation
          </span>{' '}
          de place en crèche en ligne avec un calendrier partagé pour permettre
          aux crèches d'afficher leurs disponibilités aux parents.
        </p>
        <Link href="/concept">
          <button type="button" className={styles.boutonDecouvrir}>
            Découvrir
          </button>
        </Link>
      </div>
    </div>
  );
}
