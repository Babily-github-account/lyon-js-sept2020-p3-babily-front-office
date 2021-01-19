import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import PresentationEspaceEntreprise from '../components/PresentationEspaceEntreprise';

export default function EspaceEntreprise() {
  return (
    <Layout pageTitle="EspaceEntreprise">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <PresentationEspaceEntreprise />
    </Layout>
  );
}
