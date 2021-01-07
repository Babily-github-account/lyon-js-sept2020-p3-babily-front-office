import Link from 'next/link';
import Image from 'next/image';
import styles from './Espaces.module.css';

export default function Espaces() {
  return (
    <div className={styles.containerEspaces}>
      <div className={styles.espaceTitle}>
        <Image
          src="/images/triangle.png"
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <h4 className={styles.titleName}>Pour les parents</h4>
        <p className={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{' '}
        </p>
        <div className={styles.espaceBouton}>
          <Link href="/espaceParents">
            <button className={styles.linkEspace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.espaceTitle}>
        <Image
          src="/images/rond.png"
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <h4 className={styles.titleName}>Pour les crèches</h4>
        <p className={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{' '}
        </p>
        <div className={styles.espaceBouton}>
          <Link href="/espaceParents">
            <button className={styles.linkEspace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.espaceTitle}>
        <Image
          src="/images/rectangle.png"
          alt="Picture of the author"
          width={50}
          height={40}
        />
        <h4 className={styles.titleName}>Pour les employeurs</h4>
        <p className={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{' '}
        </p>
        <div className={styles.espaceBouton}>
          <Link href="/espaceParents">
            <button className={styles.linkEspace} type="button">
              <a>Decouvrir</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
