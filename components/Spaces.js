import Link from 'next/link';
import Image from 'next/image';
import styles from './Spaces.module.css';

export default function Spaces() {
  return (
    <div className={styles.containerSpaces}>
      <div className={styles.spaceTitle}>
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
        <div className={styles.spaceButton}>
          <Link href="/parentsSection">
            <button className={styles.linkSpace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.spaceTitle}>
        <Image src="/images/rond.png" alt="circle" width={40} height={40} />
        <h4 className={styles.titleName}>Pour les crèches</h4>
        <p className={styles.lorem}>
          Babily c'est le service qui vous vous met en relation avec les parents
          afin de compléter vos plages horaires disponibles.{' '}
        </p>
        <div className={styles.spaceButton}>
          <Link href="/nurserySection">
            <button className={styles.linkSpace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.spaceTitleRhombus}>
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
