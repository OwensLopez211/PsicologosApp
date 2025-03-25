import HeaderPage from '../components/HeaderPage';
import PageTransition from '../components/PageTransition';
import MissionSection from '../components/MissionSection';
import ValuesSection from '../components/ValuesSection';

const AboutPage = () => {
  return (
    <PageTransition>
      <HeaderPage 
        title="Quiénes Somos"
        description="Conectamos personas con psicólogos profesionales para una atención mental accesible, personalizada y efectiva."
      />
      <MissionSection />
      <ValuesSection />
    </PageTransition>
  );
};

export default AboutPage;