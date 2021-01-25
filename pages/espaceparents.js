import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import PresentationEspaceParent from '../components/PresentationEspaceParent';

export default function EspaceParents() {
  return (
    <Layout pageTitle="EspaceParents">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <PresentationEspaceParent />
    </Layout>
  );
}
