import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

export default function contact() {
  return (
    <Layout pageTitle="Contact">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <Contact />
    </Layout>
  );
}
