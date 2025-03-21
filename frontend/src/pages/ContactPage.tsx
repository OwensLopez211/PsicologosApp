import HeaderPage from '../components/HeaderPage';
import PageTransition from '../components/PageTransition';
import ContactContainer from '../components/ContactContainer';

const ContactPage = () => {
  return (
    <PageTransition>
      <HeaderPage 
        title="Contáctanos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare egestas ultrices. Maecenas ultrices, purus sit amet scelerisque scelerisque."
      />
      <ContactContainer />
    </PageTransition>
  );
};

export default ContactPage;