import { RiFacebookBoxLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerReseaux}>
        <h5 className={styles.titleFooter}>Babily.fr</h5>
        <p className={styles.followFooter}>Suivez-nous !</p>
        <div className={styles.iconsSocial}>
          <RiFacebookBoxLine />
          <FaTwitterSquare />
          <RiLinkedinBoxLine />
        </div>
      </div>

      <div className={styles.footerNav}>
        <Link href="/decouvrir">
          <a>Découvrir</a>
        </Link>

        <Link href="/votrespace">
          <a>Votre espace</a>
        </Link>

        <Link href="/temoignages">
          <a>Témoignages</a>
        </Link>

        <Link href="/contact">
          <a>Contact </a>
        </Link>

        <Link href="/confidentialites">
          <a>Confidentialités</a>
        </Link>

        <Link href="/mentions">
          <a>Mentions</a>
        </Link>
      </div>

      <div className={styles.containerAdress}>
        <p>61 Cours de la Liberté</p>
        <p>69003 Lyon </p>
        <p>Nicolas Lorut</p>
        <p>ecrivez-nous@babily.fr</p>
        <p> 0 608 970 282 </p>
      </div>
    </div>
  );
}
