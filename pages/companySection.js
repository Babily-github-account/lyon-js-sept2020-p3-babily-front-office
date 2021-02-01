import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import IntroducingToCompanies from '../components/IntroducingToCompanies';

export default function CompanySection() {
  return (
    <Layout pageTitle="EspaceEntreprise">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <IntroducingToCompanies />
    </Layout>
  );
}
