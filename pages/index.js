// import Link from 'next/link';
// import Image from 'next/image';
import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import ReservationParents from '../components/ReservationParents';
import ViewSource from '../components/view-source';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <ViewSource pathname="pages/index.js" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <ReservationParents />
    </Layout>
  );
}
