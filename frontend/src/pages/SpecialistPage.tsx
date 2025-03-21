import HeaderPage from '../components/HeaderPage';
import PageTransition from '../components/PageTransition';
import SpecialistCard from '../components/SpecialistCard';

const SpecialistPage = () => {
  const specialists = [
    {
      id: 1,
      name: "Dr. Nombre Apellido",
      title: "Psicólogo Clínico",
      specialties: "Terapia Individual, Ansiedad, Depresión",
      experience: "8 años",
      imageUrl: "/specialist-1.jpg"
    },
    {
        id: 2,
        name: "Dr. Nombre Apellido",
        title: "Psicólogo Clínico",
        specialties: "Terapia Individual, Ansiedad, Depresión",
        experience: "8 años",
        imageUrl: "/specialist-1.jpg"
      },
      {
        id: 3,
        name: "Dr. Nombre Apellido",
        title: "Psicólogo Clínico",
        specialties: "Terapia Individual, Ansiedad, Depresión",
        experience: "8 años",
        imageUrl: "/specialist-1.jpg"
      },
      {
        id: 4,
        name: "Dr. Nombre Apellido",
        title: "Psicólogo Clínico",
        specialties: "Terapia Individual, Ansiedad, Depresión",
        experience: "8 años",
        imageUrl: "/specialist-1.jpg"
      },
      {
        id: 5,
        name: "Dr. Nombre Apellido",
        title: "Psicólogo Clínico",
        specialties: "Terapia Individual, Ansiedad, Depresión",
        experience: "8 años",
        imageUrl: "/specialist-1.jpg"
      },
      {
        id: 6,
        name: "Dr. Nombre Apellido",
        title: "Psicólogo Clínico",
        specialties: "Terapia Individual, Ansiedad, Depresión",
        experience: "8 años",
        imageUrl: "/specialist-1.jpg"
      },
    // Nota: Esto es mientras no creo el backend.
  ];

  return (
    <PageTransition>
      <HeaderPage 
        title="Nuestros Especialistas"
        description="Encuentra el psicólogo ideal para ti entre nuestros profesionales certificados y con amplia experiencia"
      />
      
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist) => (
            <SpecialistCard
              key={specialist.id}
              {...specialist}
            />
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default SpecialistPage;