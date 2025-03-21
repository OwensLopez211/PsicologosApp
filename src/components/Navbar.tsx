
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md font-sans">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="/logo.jpeg" alt="MentAliza" className="h-12 rounded-md" />
          <span className="text-gray-800 text-xl font-bold ml-2">MentAliza</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Inicio
          </a>
          <a href="#" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Especialistas
          </a>
          <a href="#" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Quiénes somos
          </a>
          <a href="#" className="text-black hover:text-[#2A6877] transition-colors font-sans text-md">
            Contacto
          </a>
          <button className="px-4 py-1.5 text-[#2A6877] border border-[#2A6877] rounded-md hover:bg-gray-50 transition-colors font-sans text-sm">
            Iniciar sesión
          </button>
          <button className="px-4 py-1.5 text-white bg-[#2A6877] rounded-md hover:bg-[#235A67] transition-colors font-sans text-sm">
            Comenzar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;