import Layout from '../components/Layout';
import SuiteConcept from '../components/SuiteConcept';
import Espaces from '../components/Espaces';
import GrandTitreConcept from '../components/GrandTitreConcept';
import IlsParlentDeNous from '../components/IlsParlentDeNous';
import Information from '../components/Information';
import LesChiffresBabilyConcept from '../components/LesChiffresBabilyConcept';

export default function concept() {
  const containerHead = {
    backgroundImage: `url(/images/avion.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '12%',
    paddingBottom: '12%',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  };
  const conceptStart = {
    backgroundColor: '#faf5f0',
    width: '100%',
  };

  const titleHead = {
    textAlign: 'center',
    fontFamily: "'Montserrat Alternates', sans-serif",
    color: 'white',
    fontSize: '363%',
  };

  const containerSousTitle = {
    margin: '5% auto',
  };

  const introduction = {
    textAlign: 'center',
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontSize: '1.5rem',
    color: '#F5BD76',
    paddingLeft: '20%',
    paddingRight: '20%',
  };
  return (
    <Layout pageTitle="Inscription">
      <div style={conceptStart}>
        <div style={containerHead}>
          <h1 style={titleHead}>Découvrez Babily</h1>
        </div>
      </div>
      <div style={containerSousTitle}>
        <h5 style={introduction}>
          “ Simplifions l’accueil des enfants par un véritable service aux
          familles et une optimisation de la gestion des places ! ”
        </h5>
      </div>
      <SuiteConcept />
      <Espaces />
      <GrandTitreConcept />
      <LesChiffresBabilyConcept />
      <IlsParlentDeNous />
      <Information />
    </Layout>
  );
}
