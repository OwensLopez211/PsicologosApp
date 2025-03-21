
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="w-full bg-white shadow-md font-sans">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src="/logo.jpeg" alt="MentAliza" className="h-12 rounded-md" />
          <span className="text-gray-800 text-xl font-bold ml-2">MentAliza</span>
        </Link>

        {/* Mobile menu button - Change md to lg */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu - Change md to lg */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Inicio
          </Link>
          <Link to="/especialistas" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Especialistas
          </Link>
          <Link to="/quienes-somos" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Quiénes somos
          </Link>
          <Link to="/contacto" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Contacto
          </Link>
          <Link to="/login" className="px-4 py-1.5 text-[#2A6877] border border-[#2A6877] rounded-md hover:bg-gray-50 transition-colors font-sans text-sm">
            Iniciar sesión
          </Link>
          <Link to="/registro" className="px-4 py-1.5 text-white bg-[#2A6877] rounded-md hover:bg-[#235A67] transition-colors font-sans text-sm">
            Comenzar
          </Link>
        </div>
      </div>

      {/* Mobile menu - Change md to lg */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <a onClick={() => handleNavigation('/')} className="block text-black hover:text-[#2A6877] transition-colors font-sans text-md py-2 cursor-pointer">
            Inicio
          </a>
          <a onClick={() => handleNavigation('/especialistas')} className="block text-black hover:text-[#2A6877] transition-colors font-sans text-md py-2 cursor-pointer">
            Especialistas
          </a>
          <a onClick={() => handleNavigation('/quienes-somos')} className="block text-black hover:text-[#2A6877] transition-colors font-sans text-md py-2 cursor-pointer">
            Quiénes somos
          </a>
          <a onClick={() => handleNavigation('/contacto')} className="block text-black hover:text-[#2A6877] transition-colors font-sans text-md py-2 cursor-pointer">
            Contacto
          </a>
          <div className="space-y-2">
            <a onClick={() => handleNavigation('/login')} className="block w-full px-4 py-1.5 text-[#2A6877] border border-[#2A6877] rounded-md hover:bg-gray-50 transition-colors font-sans text-sm text-center cursor-pointer">
              Iniciar sesión
            </a>
            <a onClick={() => handleNavigation('/registro')} className="block w-full px-4 py-1.5 text-white bg-[#2A6877] rounded-md hover:bg-[#235A67] transition-colors font-sans text-sm text-center cursor-pointer">
              Comenzar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;