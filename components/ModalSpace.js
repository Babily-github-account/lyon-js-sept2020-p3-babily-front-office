import Link from 'next/link';
import styles from './ModalSpace.module.css';

export default function ModalSpace() {
  return (
    <div className={styles.modalSpace}>
      <div className={styles.card}>
        <div className={styles.fille} />
        <h1 className={styles.creche}>Professionnels de la Petite Enfance</h1>
        <p className={styles.paragrapheModal}>
          Babily c'est le service qui vous vous met en{' '}
          <strong>relation avec les parents</strong> afin de compléter vos
          plages horaires disponibles.
        </p>
        <div className={styles.spaceButton}>
          <Link href="/nurserySection">
            <button className={styles.linkSpace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.garcon} />
        <h1 className={styles.creche}>Employeurs & Entreprises</h1>
        <p className={styles.paragrapheModal}>
          Babily c'est le service dont{' '}
          <strong>vos salariés pourront profiter</strong>, et qui leur permettra
          de réserver des créneaux à tout moment.
        </p>
        <div className={styles.spaceButton}>
          <Link href="/companySection">
            <button className={styles.linkSpace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
