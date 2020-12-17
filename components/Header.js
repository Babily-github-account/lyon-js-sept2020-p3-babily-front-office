import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navHeader}>
          <Link href="/" className={styles.logoHeader}>
            <a>
              <Image
                src="/images/BabilylogoSansBaselineCoul.png"
                alt="Babily.fr"
                width={220}
                height={100}
              />
            </a>
          </Link>
          <Link href="/espacepro">
            <a className={styles.linkPro}>Vous êtes un professionnel ?</a>
          </Link>
        </div>
        <div className={styles.navLogin}>
          <Link href="/">
            <a className={styles.linkNav}>Accueil</a>
          </Link>
          <Link href="/decouvrir">
            <a className={styles.linkNav}>Découvrir</a>
          </Link>
          <Link href="/espaceparents">
            <a className={styles.linkNav}>Votre Espace</a>
          </Link>
          <Link href="/contact">
            <a className={styles.linkNav}>Contact</a>
          </Link>
          <Link href="/connexion">
            <a className={styles.linkLogin}>
              <Image
                alt="Se connecter"
                src="/images/icon_connexion.png"
                width={25}
                height={25}
              />
              Connexion
            </a>
          </Link>
          <Link href="/inscription">
            <a className={styles.linkSignin}>Inscription</a>
          </Link>
        </div>
      </header>
    </>
    // <header className={styles.headerContainer}>
    //   <nav>
    //     <ul className={styles.menu}>
    //       <li className={styles.menuItem}>
    //         <Link href="/">
    //           <a href="" className={styles.link}>
    //             Home
    //           </a>
    //         </Link>
    //       </li>
    //       <li className={styles.menuItem}>
    //         <Link href="/dynamic-content">
    //           <a className={styles.link}>Dynamic content</a>
    //         </Link>
    //       </li>
    //       <li className={styles.menuItem}>
    //         <Link href="/about">
    //           <a className={styles.link}>About Us</a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}
