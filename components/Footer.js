import { RiFacebookBoxLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const containerFooter = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundImage: `url(/images/FooterWaves.svg)`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',

    height: '400px',
    width: '100%',
    color: 'white',
    fontFamily: "'Montserrat Alternates', sans-serif",
  };

  const containerReseaux = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '20px',
  };
  const titleFooter = {
    fontSize: '24px',
    margin: '0',
  };

  const followFooter = {
    fontSize: '10px',
  };

  const footerNav = {
    width:'50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
    justifyContent: 'space-around',
    paddingBottom: '80px',
  };

  const containerAdress = {
    fontSize: '12px',
    paddingBottom: '40px',
  };

  return (
    <div style={containerFooter}>
      <div style={containerReseaux}>
        <h5 style={titleFooter}>Babily.fr</h5>
        <p style={followFooter}>Suivez-nous !</p>
        <div>
          <RiFacebookBoxLine />
          <FaTwitterSquare />
          <RiLinkedinBoxLine />
        </div>
      </div>

      <ul style={footerNav}>
        <Link href="/decouvrir">
          <a>Découvrir</a>
        </Link>
        <Link href="/votrespace">
          <a>Votre espace</a>
        </Link>{' '}
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
      </ul>

      <div style={containerAdress}>
        <p>61 Cours de la Liberté</p>
        <p>69003 Lyon </p>
        <p>Nicolas Lorut</p>
        <p>ecrivez-nous@babily.fr</p>
        <p> 0 608 970 282 </p>
      </div>
    </div>
  );
}
