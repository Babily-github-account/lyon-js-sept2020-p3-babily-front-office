import Image from 'next/image';
import Link from 'next/link';
import styles from './TalkAboutUs.module.css';

export default function IlsParlentDeNous() {
  return (
    <div className={styles.containerTalk}>
      <h3 className={styles.titleTalk}>Ils parlent de nous</h3>
      <div className={styles.imageWebsite}>
        <Image
          src="/images/lesProsDeLaPetiteEnfance.png"
          alt="logo pros of early childhood"
          width={502}
          height={121}
        />
      </div>
      <Link href="https://lesprosdelapetiteenfance.fr/initiatives/autres-initiatives/babily-un-service-dedie-laccueil-occasionnel">
        <a className={styles.linkTalk} target="_blank">
          Lire l'article
        </a>
      </Link>
    </div>
  );
}
