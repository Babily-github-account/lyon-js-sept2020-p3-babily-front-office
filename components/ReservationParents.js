import Link from 'next/link';
import Image from 'next/image';
import styles from './ReservationParents.module.css';

export default function ReservationParents() {
  return (
    <>
      <div className={styles.containerReservation}>
        <div className={styles.containerText}>
          <h1 className={styles.titleHome}>
            Et si c'était juste <br />
            une heure?
          </h1>
          <p className={styles.textHome}>
            Trouvez et reservez{' '}
            <span className={styles.spanRapid} style={{ color: '#FA6870' }}>
              rapidement
            </span>{' '}
            <br />
            votre place en crèche !
          </p>
          <div className={styles.boxReservation}>
            <Link href="/parentsSection">
              <a>
                <button className={styles.btnReservation} type="button">
                  Je réserve !
                </button>
              </a>
            </Link>
            <Link href="/companySection">
              <a className={styles.linkDispo}>Voir les disponibilités</a>
            </Link>
          </div>
        </div>
        <div className={styles.containerImgReservation}>
          <Image
            className={styles.imgGirlNursery}
            src="/images/fillette:home.jpg"
            alt="Girl hugging herself"
            width={640}
            height={451}
          />

          <div className={styles.imgYellowPalette}>
            <Image
              src="/images/forme2:home.png"
              alt="yellow palette"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.imgRedPalette}>
            <Image
              src="/images/forme3:home.png"
              alt="red palette"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
