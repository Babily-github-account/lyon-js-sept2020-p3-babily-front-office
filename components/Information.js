import Link from 'next/link';
import styles from './Information.module.css';

export default function Information() {
  return (
    <div className={styles.containerInformation}>
      <h3 className={styles.titleInfo}>Besoin d'une information?</h3>
      <p className={styles.paragraphInfo}>
        Vous n'avez pas trouvé les informations que vous recherchiez, ou
        souhaitez avoir plus de détails?
        <br /> Nous pouvons nous rencontrer ou échanger via divers réseaux de
        communication.{' '}
      </p>
      <Link href="/contact">
        <a className={styles.btn}>Contactez-nous !</a>
      </Link>
    </div>
  );
}
