import ContactForm from './ContactForm';

const ContactContainer = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Message and social links */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">Envíanos un mensaje</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                ¿Tienes preguntas o algún comentario? Estamos aquí para ayudarte en tu camino hacia el bienestar emocional.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Síguenos en nuestras redes:</p>
              <div className="flex gap-6">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-[#2A6877] transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-[#2A6877] transition-all transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-[#2A6877] transition-all transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700 font-medium">Información de contacto:</p>
              <div className="space-y-2 text-gray-600">
                <p>📧 contacto@mentaliza.com</p>
                <p>📱 +56 9 1234 5678</p>
                <p>📍 Santiago, Chile</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;