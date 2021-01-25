import Layout from '../components/Layout';
import HeaderConcept from '../components/HeaderConcept';
import SuiteConcept from '../components/SuiteConcept';
import Espaces from '../components/Espaces';
import GrandTitreConcept from '../components/GrandTitreConcept';
import IlsParlentDeNous from '../components/IlsParlentDeNous';
import Information from '../components/Information';
import LesChiffresBabilyConcept from '../components/LesChiffresBabilyConcept';

export default function concept() {
  return (
    <Layout pageTitle="Inscription">
      <HeaderConcept />
      <SuiteConcept />
      <Espaces />
      <GrandTitreConcept />
      <LesChiffresBabilyConcept />
      <IlsParlentDeNous />
      <Information />
    </Layout>
  );
}
