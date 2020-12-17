import Image from 'next/image';
import styles from './Bandeau.module.css';

export default function VagueHome() {
  return (
    <div className={styles.vagueHomeContainer}>
      <div className={styles.gridContainer}>
        <h5 className={styles.titre}>Ils contribuent au dispositif</h5>
        <div className={styles.inlineContainer}>
          <div className={styles.logo1}>
            <Image
              src="/images/advizi.png"
              alt="logo Advizi"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo2}>
            <Image
              src="/images/caf.png"
              alt="logo Allocations Familiales"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo3}>
            <Image
              src="/images/boostinlyon.png"
              alt="logo Boost in Lyon"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo4}>
            <Image
              src="/images/h7.png"
              alt="logo h 7"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo5}>
            <Image
              src="/images/bpi.png"
              alt="logo B P I France"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo6}>
            <Image
              src="/images/french_tech.png"
              alt="logo la french tech"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo7}>
            <Image
              src="/images/inpi.png"
              alt="logo I N P I"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo8}>
            <Image
              src="/images/adie.png"
              alt="logo adie"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.logo9}>
            <Image
              src="/images/region-raa.png"
              alt="logo region auvergne rhone alpes"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
