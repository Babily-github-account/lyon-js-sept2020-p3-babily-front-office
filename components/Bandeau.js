import Image from 'next/image';
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
            <a href="https://advizi.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/advizi.png"
                alt="logo Advizi"
                width={170}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://caf.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/caf.png"
                alt="logo Allocations Familiales"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://boostinlyon.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/boostinlyon.png"
                alt="logo Boost in Lyon"
                width={170}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://h-7.eu/" target="_blank" rel="noreferrer">
              <Image
                src="/images/h7.png"
                alt="logo h 7"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://bpifrance.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/bpi.png"
                alt="logo B P I France"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://lafrenchtech.com" target="_blank" rel="noreferrer">
              <Image
                src="/images/frenchTech.png"
                alt="logo la french tech"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://inpi.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/inpi.png"
                alt="logo I N P I"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://adie.org" target="_blank" rel="noreferrer">
              <Image
                src="/images/adie.png"
                alt="logo adie"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a
              href="https://auvergnerhonealpes.fr"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/region.png"
                alt="logo region auvergne rhone alpes"
                width={150}
                height={100}
              />
            </a>
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
