import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import IntroducingToParents from '../components/IntroducingToParents';

export default function ParentsSection() {
  return (
    <Layout pageTitle="EspaceParents">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <IntroducingToParents />
    </Layout>
  );
}
