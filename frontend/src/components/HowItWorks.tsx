const HowItWorks = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-serif text-center mb-12">¿Cómo funciona Bienestar?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="text-center">
          <div className="bg-[#2A6877] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
            1
          </div>
          <h3 className="font-serif text-xl mb-3">Busca un Psicólogo</h3>
          <p className="text-gray-600">
            Navega por nuestro listado de psicólogos verificados
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="bg-[#2A6877] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
            2
          </div>
          <h3 className="font-serif text-xl mb-3">Agenda tu primera sesión</h3>
          <p className="text-gray-600">
            Al elegir tu profesional, agenda la sesión en 3 sencillos pasos: (inicia sesión, paga y recibe los datos de tu sesión)
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="bg-[#2A6877] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
            3
          </div>
          <h3 className="font-serif text-xl mb-3">Contacto directo con Profesional</h3>
          <p className="text-gray-600">
            El día y hora de tu sesión, conéctate en el link que te enviamos a tu correo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;