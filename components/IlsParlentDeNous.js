import Image from 'next/image';
import Link from 'next/link';

export default function IlsParlentDeNous() {
  const containerSpeak = {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundImage: `url(/images/mainBg.png)`,
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '5%',
    paddingBottom: '5%',
  };

  const containerArticle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '150px',
    paddingleft: '8%',
  };

  const titleSpeack = {
    fontSize: '2.5rem',
    fontFamily: "'Montserrat Alternates', sans-serif",
    color: '#FFBB69',
    textDecoration: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#FFBB69',
    textDecorationThickness: '1.2rem',
  };

  const linkSpeack = {
    textDecoration: 'underline',
    fontFamily: "'Krub', sans-serif",
    fontSize: '17px',
    marginBottom: '10px',
  };

  const imageSiteWeb = {
    filter: 'drop-shadow(7px 7px 4px rgba(0, 0, 0, 0.25))',
    paddingRight: '8%',
  };
  return (
    <div style={containerSpeak}>
      <div style={containerArticle}>
        <h3 style={titleSpeack}>Ils parlent de nous</h3>
        <Link href="https://lesprosdelapetiteenfance.fr/initiatives/autres-initiatives/babily-un-service-dedie-laccueil-occasionnel">
          <a style={linkSpeack} target="_blank">
            Lire l'article
          </a>
        </Link>
      </div>
      <div style={imageSiteWeb}>
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
