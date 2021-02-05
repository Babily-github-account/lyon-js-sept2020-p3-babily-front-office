import React from 'react';
import Link from 'next/link';
import styles from './WhatIsBabily.module.css';

export default function WhatIsBabily() {
  return (
    <div className={styles.whatIsBabily}>
      <div className={styles.container}>
        <h3 className={styles.title}>C'est quoi Babily?</h3>
        <p className={styles.definition}>
          Nous sommes{' '}
          <span className={styles.spanDiscover}>un système de réservation</span>{' '}
          de place en crèche en ligne avec un calendrier partagé pour permettre
          aux crèches d'afficher leurs disponibilités aux parents.
        </p>
        <Link href="/concept">
          <button type="button" className={styles.buttonDiscover}>
            Découvrir
          </button>
        </Link>
      </div>
    </div>
  );
}
