import Link from 'next/link';
import Image from 'next/image';
import styles from './ReservationParents.module.css';

export default function ReservationParents() {
  return (
    <>
      <div className={styles.containerReservation}>
        <div className={styles.containerText}>
          <h1 className={styles.titleHome}>Et si c'était juste une heure?</h1>
          <p className={styles.textHome}>
            Trouvez et reservez{' '}
            <span style={{ color: '#FA6870' }}>rapidement</span> <br />
            votre place en crèche !
          </p>
          <div className={styles.boxReservation}>
            <Link href="/espaceparents">
              <a>
                <button className={styles.btnReservation} type="button">
                  Je réserve !
                </button>
              </a>
            </Link>
            <Link href="/espacepro">
              <a className={styles.linkDispo}>Voir les disponibilités</a>
            </Link>
          </div>
        </div>
        <Image
          className={styles.imgFilleCreche}
          src="/images/fillette:home.png"
          alt="Fille en crèche"
          // layout="responsive"
          width={600}
          height={600}
        />
        <div className={styles.imgFormeJaune}>
          <Image
            src="/images/forme2:home.png"
            alt="Forme jaune"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.imgFormeRouge}>
          <Image
            src="/images/forme3:home.png"
            alt="Forme Rouge"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
