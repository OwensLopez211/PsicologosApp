
import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

        {/* Mobile menu button remains unchanged */}
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

        {/* Desktop menu with NavLink */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={`transition-colors font-sans text-md ${
              location.pathname === '/' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/especialistas" 
            className={`transition-colors font-sans text-md ${
              location.pathname === '/especialistas' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Especialistas
          </NavLink>
          <NavLink 
            to="/quienes-somos" 
            className={`transition-colors font-sans text-md ${
              location.pathname === '/quienes-somos' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Quiénes somos
          </NavLink>
          <NavLink 
            to="/contacto" 
            className={`transition-colors font-sans text-md ${
              location.pathname === '/contacto' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Contacto
          </NavLink>
          <Link to="/login" className="px-4 py-1.5 text-[#2A6877] border border-[#2A6877] rounded-md hover:bg-gray-50 transition-colors font-sans text-sm">
            Iniciar sesión
          </Link>
          <Link to="/registro" className="px-4 py-1.5 text-white bg-[#2A6877] rounded-md hover:bg-[#235A67] transition-colors font-sans text-sm">
            Comenzar
          </Link>
        </div>
      </div>

      {/* Mobile menu with active states */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <a 
            onClick={() => handleNavigation('/')} 
            className={`block transition-colors font-sans text-md py-2 cursor-pointer ${
              location.pathname === '/' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Inicio
          </a>
          <a 
            onClick={() => handleNavigation('/especialistas')} 
            className={`block transition-colors font-sans text-md py-2 cursor-pointer ${
              location.pathname === '/especialistas' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Especialistas
          </a>
          <a 
            onClick={() => handleNavigation('/quienes-somos')} 
            className={`block transition-colors font-sans text-md py-2 cursor-pointer ${
              location.pathname === '/quienes-somos' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Quiénes somos
          </a>
          <a 
            onClick={() => handleNavigation('/contacto')} 
            className={`block transition-colors font-sans text-md py-2 cursor-pointer ${
              location.pathname === '/contacto' ? 'text-[#2A6877] font-bold' : 'text-black hover:text-[#2A6877]'
            }`}
          >
            Contacto
          </a>
          <div className="pt-4 space-y-2">
            <a
              onClick={() => handleNavigation('/login')}
              className="block w-full px-4 py-2 text-center text-[#2A6877] border border-[#2A6877] rounded-md hover:bg-gray-50 transition-colors font-sans text-sm cursor-pointer"
            >
              Iniciar sesión
            </a>
            <a
              onClick={() => handleNavigation('/registro')}
              className="block w-full px-4 py-2 text-center text-white bg-[#2A6877] rounded-md hover:bg-[#235A67] transition-colors font-sans text-sm cursor-pointer"
            >
              Comenzar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;