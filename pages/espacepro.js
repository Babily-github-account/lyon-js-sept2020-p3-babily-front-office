import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import PresentationEspacePro from '../components/PresentationEspacePro';

export default function EspacePro() {
  return (
    <Layout pageTitle="EspacePro">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <PresentationEspacePro />
    </Layout>
  );
}
