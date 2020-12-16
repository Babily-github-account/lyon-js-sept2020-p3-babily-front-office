import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src="/images/BabilylogoSansBaselineCoul.png"
            alt="Babily.fr"
            width={180}
            height={80}
          />
        </Link>
        <div className={styles.navLogin}>
          <Link className={styles.aLogin} href="/connexion">
            <a>Connectez-Vous</a>
          </Link>
          <Link className={styles.aSignin} href="/inscription">
            <a>S'inscrire</a>
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
