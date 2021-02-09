import React from 'react';
import { RiFacebookBoxLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const CustomComponentFacebook = React.forwardRef(function CustomComponent() {
    return <RiFacebookBoxLine />;
  });
  const CustomComponentTwitter = React.forwardRef(function CustomComponent() {
    return <FaTwitterSquare />;
  });
  const CustomComponentLinkedIn = React.forwardRef(function CustomComponent() {
    return <RiLinkedinBoxLine />;
  });

  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerReseaux}>
        <h5 className={styles.titleFooter}>Babily.fr</h5>
        <p className={styles.followFooter}>Suivez-nous !</p>
        <div className={styles.iconsSocial}>
          <Link href="https://www.facebook.com/Babily/">
            <CustomComponentFacebook />
          </Link>
          <Link href="https://twitter.com/babily">
            <CustomComponentTwitter />
          </Link>
          <Link href="https://www.linkedin.com/company/babily/?originalSubdomain=fr">
            <CustomComponentLinkedIn />
          </Link>
        </div>
      </div>

      <div className={styles.footerNav}>
        <Link href="/concept">
          <a>Découvrir</a>
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
