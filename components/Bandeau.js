import Image from 'next/image';
import Link from 'next/link';
import styles from './Bandeau.module.css';

export default function VagueHome() {
  return (
    <div>
      <div className={styles.divVague}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 5"
          preserveAspectRatio="none"
        >
          <path d="M0,40 L0,5 Q250,0 500,6 L500,40 Z" fill="#FA6870" />
        </svg>
      </div>
      <div className={styles.vagueHomeContainer}>
        <h5 className={styles.titre}>Ils contribuent au dispositif</h5>
        <div className={styles.inlineContainer}>
          <div className={styles.logo}>
            <Link href="https://advizi.fr" target="_blank" rel="noreferrer">
              <a>
                <Image
                  src="/images/advizi.webp"
                  alt="logo Advizi"
                  width={170}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="https://caf.fr" target="_blank" rel="noreferrer">
              <a>
                <Image
                  src="/images/caf.webp"
                  alt="logo Allocations Familiales"
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link
              href="https://boostinlyon.fr"
              target="_blank"
              rel="noreferrer"
            >
              <a>
                <Image
                  src="/images/boostinlyon.webp"
                  alt="logo Boost in Lyon"
                  width={170}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="https://h-7.eu/" target="_blank" rel="noreferrer">
              <a>
                <Image
                  src="/images/h7.webp"
                  alt="logo h 7"
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="https://bpifrance.fr" target="_blank" rel="noreferrer">
              <a>
                <Image
                  src="/images/bpi.webp"
                  alt="logo B P I France"
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link
              href="https://lafrenchtech.com"
              target="_blank"
              rel="noreferrer"
            >
              <a>
                <Image
                  src="/images/frenchTech.webp"
                  alt="logo la french tech"
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="https://inpi.fr" target="_blank" rel="noreferrer">
              <a>
                <Image
                  src="/images/inpi.webp"
                  alt="logo I N P I"
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="https://adie.org" target="_blank" rel="noreferrer">
              <a>
                <Image
                  src="/images/adie.webp"
                  alt="logo adie"
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link
              href="https://auvergnerhonealpes.fr"
              target="_blank"
              rel="noreferrer"
            >
              <a>
                <Image
                  src="/images/region.webp"
                  alt="logo region auvergne rhone alpes"
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bgBody}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 5"
          preserveAspectRatio="none"
        >
          <path d="M0,-40 L0,-1 Q300,5 500,1 L500,-40 Z" fill="#FA6870" />
        </svg>
      </div>
    </div>
  );
}
