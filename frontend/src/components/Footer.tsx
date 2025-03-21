const Footer = () => {
  return (
    <footer className="bg-[#2A6877] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MentAliza</h3>
            <p className="text-sm">
              Conectando personas con profesionales de la salud mental para una vida más plena y saludable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition-colors">Inicio</a></li>
              <li><a href="/especialistas" className="hover:text-gray-300 transition-colors">Especialistas</a></li>
              <li><a href="/quienes-somos" className="hover:text-gray-300 transition-colors">Quiénes Somos</a></li>
              <li><a href="/contacto" className="hover:text-gray-300 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>Terapia Individual</li>
              <li>Terapia de Pareja</li>
              <li>Terapia Familiar</li>
              <li>Asesoramiento Online</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>Email: contacto@mentaliza.com</li>
              <li>Tel: +56 9 1234 5678</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} MentAliza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;