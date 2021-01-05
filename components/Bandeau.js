/* eslint-disable import/no-unresolved */
import Image from 'next/image';
import styles from './Bandeau.module.css';

export default function VagueHome() {
  return (
    <div className={styles.vagueHomeContainer}>
      <div className={styles.gridContainer}>
        <h5 className={styles.titre}>Ils contribuent au dispositif</h5>
        <div className={styles.separator} />
        <div className={styles.inlineContainer}>
          <div className={styles.logo1}>
            <a href="https://advizi.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/advizi.png"
                alt="logo Advizi"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo2}>
            <a href="https://caf.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/caf.png"
                alt="logo Allocations Familiales"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo3}>
            <a href="https://boostinlyon.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/boostinlyon.png"
                alt="logo Boost in Lyon"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo4}>
            <a href="https://h-7.eu/" target="_blank" rel="noreferrer">
              <Image
                src="/images/h7.png"
                alt="logo h 7"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo5}>
            <a href="https://bpifrance.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/bpi.png"
                alt="logo B P I France"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo6}>
            <a href="https://lafrenchtech.com" target="_blank" rel="noreferrer">
              <Image
                src="/images/french_tech.png"
                alt="logo la french tech"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo7}>
            <a href="https://inpi.fr" target="_blank" rel="noreferrer">
              <Image
                src="/images/inpi.png"
                alt="logo I N P I"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo8}>
            <a href="https://adie.org" target="_blank" rel="noreferrer">
              <Image
                src="/images/adie.png"
                alt="logo adie"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.logo9}>
            <a
              href="https://auvergnerhonealpes.fr"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/region.png"
                alt="logo region auvergne rhone alpes"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
