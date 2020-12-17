import Image from 'next/image';
import Link from 'next/link';
import styles from './IlsParlentDeNous.module.css';

export default function IlsParlentDeNous() {
  return (
    <div className={styles.containerSpeak}>
      <div className={styles.containerArticle}>
        <h3 className={styles.titleSpeack}>Ils parlent de nous</h3>
        <Link href="https://lesprosdelapetiteenfance.fr/initiatives/autres-initiatives/babily-un-service-dedie-laccueil-occasionnel">
          <a className={styles.linkSpeack} target="_blank">
            Lire l'article
          </a>
        </Link>
      </div>
      <div className={styles.imageSiteWeb}>
        <Image
          src="/images/siteweb.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
