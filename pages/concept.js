import Layout from '../components/Layout';
import HeaderConcept from '../components/HeaderConcept';
import SuiteConcept from '../components/SuiteConcept';
import Spaces from '../components/Spaces';
import IssuesPrecautionsSecurity from '../components/IssuesPrecautionsSecurity';
import TalkAboutUs from '../components/TalkAboutUs';
import Information from '../components/Information';
import BabilysStatistics from '../components/BabilysStatistics';

export default function concept() {
  return (
    <Layout pageTitle="Inscription">
      <HeaderConcept />
      <SuiteConcept />
      <Spaces />
      <IssuesPrecautionsSecurity />
      <BabilysStatistics />
      <TalkAboutUs />
      <Information />
    </Layout>
  );
}
