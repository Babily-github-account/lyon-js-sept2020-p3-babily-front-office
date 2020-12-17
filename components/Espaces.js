import Link from 'next/link';
import Image from 'next/image';

const containerEspaces = {
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  backgroundColor: '#faf5f0',
  paddingLeft: '4%',
  paddingRight: '4%',
  marginTop: '15%',
};

const espaceTitle = {
  width: '20%',
  // border: '4mm ridge rgba(170, 50, 220, .6)',
};

const titleName = {
  fontFamily: "'Montserrat Alternates', sans-serif",
  fontSize: '1.4rem',
  marginBottom: '9%',
  marginTop: '0',
};

const lorem = {
  fontFamily: "'Krub', sans-serif",
  fontSize: '15px',
  padding: '0 0 5% 0',
  marginBottom: '5%',
};

const linkEspace = {
  color: 'white',
  fontSize: '16px',
  fontFamily: "'Krub', sans-serif",
  backgroundColor: '#3c84fb',
  padding: '10px',
  borderRadius: '30px',
  border: 'none',
  width: '45%',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};
export default function Espaces() {
  return (
    <div style={containerEspaces}>
      <div style={espaceTitle}>
        <Image
          src="/images/triangle.png"
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <h4 style={titleName}>Pour les parents</h4>
        <p style={lorem}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{' '}
        </p>
        <Link href="/espaceParents">
          <button style={linkEspace} type="button">
            <a>Decouvrir</a>
          </button>
        </Link>
      </div>
      <div style={espaceTitle}>
        <Image
          src="/images/rond.png"
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <h4 style={titleName}>Pour les crèches</h4>
        <p style={lorem}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{' '}
        </p>
        <Link href="/espaceParents">
          <button style={linkEspace} type="button">
            <a>Decouvrir</a>
          </button>
        </Link>
      </div>
      <div style={espaceTitle}>
        <Image
          src="/images/rectangle.png"
          alt="Picture of the author"
          width={50}
          height={40}
        />
        <h4 style={titleName}>Pour les employeurs</h4>
        <p style={lorem}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{' '}
        </p>
        <Link href="/espaceParents">
          <button style={linkEspace} type="button">
            <a>Decouvrir</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
