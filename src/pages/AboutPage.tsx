import HeaderPage from '../components/HeaderPage';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <HeaderPage 
        title="Quiénes Somos"
        description="Conectamos personas con psicólogos profesionales para una atención mental accesible, personalizada y efectiva."
      />
      {/* Rest of about page content */}
    </PageTransition>
  );
};

export default AboutPage;