import Image from 'next/image';
import Link from 'next/link';
import styles from './IlsParlentDeNous.module.css';

export default function IlsParlentDeNous() {
  return (
    <div className={styles.containerSpeak}>
      <h3 className={styles.titleSpeack}>Ils parlent de nous</h3>
      <div className={styles.imageSiteWeb}>
        <Image
          src="/images/lesProsDeLaPetiteEnfance.png"
          alt="logo des pros de la petite enfance"
          width={502}
          height={121}
        />
        <Link href="https://lesprosdelapetiteenfance.fr/initiatives/autres-initiatives/babily-un-service-dedie-laccueil-occasionnel">
          <a className={styles.linkSpeack} target="_blank">
            Lire l'article
          </a>
        </Link>
      </div>
    </div>
  );
}
