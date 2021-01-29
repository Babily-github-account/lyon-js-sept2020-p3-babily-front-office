// import Link from 'next/link';
// import Image from 'next/image';
import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import ReservationParents from '../components/ReservationParents';
import ViewSource from '../components/view-source';
import CestQuoiBabily from '../components/CestQuoiBabily';
import Bandeau from '../components/Bandeau';
import DidYouKnow from '../components/DidYouKnow';
import Cards from '../components/cards';

export default function Home() {
  const containerBg = {
    backgroundImage: `url(/images/background10.jpg)`,
  };
  const background2 = {
    backgroundImage: `url(/images/background2.jpg)`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
  };

  return (
    <Layout pageTitle="Home">
      <ViewSource pathname="pages/index.js" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <ReservationParents />
      <div style={containerBg}>
        <CestQuoiBabily />
        <DidYouKnow />
        <Bandeau />
      </div>
      <div style={background2}>
        <Cards />
      </div>
    </Layout>
  );
}
