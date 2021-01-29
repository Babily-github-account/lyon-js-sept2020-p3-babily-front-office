import Link from 'next/link';
import Image from 'next/image';
import styles from './Espaces.module.css';

export default function Espaces() {
  return (
    <div className={styles.containerEspaces}>
      <div className={styles.espaceTitle}>
        <Image
          src="/images/triangle.png"
          alt="triangle"
          width={40}
          height={40}
        />
        <h4 className={styles.titleName}>Pour les parents</h4>
        <p className={styles.lorem}>
          Babily c'est LA solution qui vous permet de visualiser les créneaux
          disponibles dans votre crèche.
        </p>
        <div className={styles.espaceBouton}>
          <Link href="/espaceparents">
            <button className={styles.linkEspace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.espaceTitle}>
        <Image src="/images/rond.png" alt="circle" width={40} height={40} />
        <h4 className={styles.titleName}>Pour les crèches</h4>
        <p className={styles.lorem}>
          Babily c'est le service qui vous vous met en relation avec les parents
          afin de compléter vos plages horaires disponibles.{' '}
        </p>
        <div className={styles.espaceBouton}>
          <Link href="/espacepro">
            <button className={styles.linkEspace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.espaceTitleRhombus}>
        <Image
          src="/images/rectangle.png"
          alt="rhombus"
          width={48}
          height={48}
        />
        <h4 className={styles.titleName}>Pour les employeurs</h4>
        <p className={styles.lorem}>
          Babily c'est le service dont vos salariés pourront profiter, et qui
          leur permettra de réserver des créneaux à tout moment.{' '}
        </p>
        <div className={styles.espaceBouton}>
          <Link href="/espaceentreprise">
            <button className={styles.linkEspace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
