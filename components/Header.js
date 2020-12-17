import Link from 'next/link';
import Image from 'next/image';
// import { slide as Menu } from 'react-burger-menu';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navHeader}>
          <Link href="/">
            <a className={styles.logoHeader}>
              <Image
                src="/images/BabilylogoSansBaselineCoul.png"
                alt="Babily.fr"
                layout="fixed"
                width={200}
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
            <a
              className={styles.linkSignin}
              style={{ width: '20px', minWidth: '20px' }}
            >
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </a>
          </Link>
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
          {/* <Menu />
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
          </Menu> */}
          <Link href="/connexion">
            <a className={styles.linkLogin}>
              <Image
                alt="Se connecter"
                src="/images/icon_connexion.png"
                layout="fixed"
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
  );
}
