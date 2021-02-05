import GoogleFonts from 'next-google-fonts';
import IntroducingToNurseries from '../components/IntroducingToNurseries';
import Layout from '../components/Layout';

export default function NurserySection() {
  return (
    <Layout pageTitle="EspacePro">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <IntroducingToNurseries />
    </Layout>
  );
}
