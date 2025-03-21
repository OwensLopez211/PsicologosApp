import { useNavigate } from 'react-router-dom';

const PsychologistCTA = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registro', { state: { userType: 'psychologist' } });
  };

  return (
    <section className="bg-[#B4E4D3] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <img 
              src="/psychologist-dashboard.jpg" 
              alt="Psychologist Dashboard" 
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold mb-6">
              ¿Eres Psicólogo? Comienza a atraer nuevos pacientes
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2A6877] rounded-full"></span>
                <span>Conecte con pacientes que están buscando especialistas.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2A6877] rounded-full"></span>
                <span>Permita que los pacientes agenden con usted día y noche. Olvídese de esperar al horario de apertura.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2A6877] rounded-full"></span>
                <span>Mejore su reputación en línea consiguiendo opiniones verificadas.</span>
              </li>
            </ul>

            <button 
              onClick={handleRegisterClick}
              className="bg-[#2A6877] text-white px-8 py-3 rounded-md hover:bg-[#235A67] transition-colors"
            >
              Regístrate ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologistCTA;