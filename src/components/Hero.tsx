const Hero = () => {
  return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          El psicólogo online que
          <br />
          estabas buscando
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Empieza a sentirte mejor con la ayuda de
            <br />
            tu psicólogo en Bienestar
          </h2>
          
          <p className="text-gray-600 mb-8">
            Bienestar es un <span className="font-medium">servicio de psicología online</span> que encuentra
            <br />
            el profesional más adecuado a tus necesidades entre una amplia variedad de
            <br />
            psicólogos y psicólogas. Bienestar llegó a Chile en 2023 para seguir mejorando y facilitando el acceso
           
            a una terapia psicológica de calidad al mayor número de personas posible, bajo el impulso de una marca global.
          </p>

          <button className="bg-[#2A6877] text-white px-8 py-3 rounded-md hover:bg-[#235A67] transition-colors flex items-center gap-2 mx-auto">
            Agenda con tu psicólogo
          </button>
        </div>

        
      </section>
  );
};

export default Hero;