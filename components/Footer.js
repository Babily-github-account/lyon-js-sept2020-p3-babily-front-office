import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerReseaux}>
        {/* <Link className={styles.footerLink} {styles.footerReseauxP} href="/">
          <a>babily.fr</a>
        </Link>
        <p className={styles.footerReseauxIcons} {styles.footerReseauxP}">
          <AiFillFacebook style={{ fontSize: '30px' }} />
        </p>
        <p className={styles.footerReseauxIcons} {styles.footerReseauxP}">
          <AiFillTwitterCircle style={{ fontSize: '30px' }} />
        </p>
        <p className={styles.footerReseauxIcons} {styles.footerReseauxP}">
          <AiFillInstagram style={{ fontSize: '30px' }} />
        </p> */}

        <Link className={styles.footerLink} href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className={styles.footerNav}>
        <Link className={styles.footerLink} href="/espacepro">
          <a>Espace professionnel</a>
        </Link>
        <Link className={styles.footerLink} href="/espaceparents">
          <a>Espace parents</a>
        </Link>
        <Link className={styles.footerLink} href="/vieprivee">
          <a>Vie privée</a>
        </Link>
        <Link className={styles.footerLink} href="/mentions">
          <a>Mentions</a>
        </Link>
      </div>
      <div className={styles.footerAdresse}>
        <p>66 Cours de la liberté</p>
        <p>69003 Lyon</p>
        <p>Nicolas Lorut</p>
        <p>ecrivez-nous@babily.fr</p>
        <p>06 08 97 02 82</p>
      </div>
    </footer>
  );
}
