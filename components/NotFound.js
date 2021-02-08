import Image from 'next/image';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.titleNotFound}>En construction</h2>
      <div className={styles.car}>
        <Image
          src="/images/train.png"
          alt="logo avion"
          width={210}
          height={100}
        />
      </div>
    </div>
  );
}
