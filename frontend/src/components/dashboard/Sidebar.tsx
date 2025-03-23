import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  userType?: 'CLIENT' | 'PSYCHOLOGIST' | 'ADMIN';
}

const Sidebar = ({ userType }: SidebarProps) => {
  const location = useLocation();
  
  const getMenuItems = () => {
    const commonItems = [
      { path: '/dashboard', label: 'Inicio', icon: '🏠' },
      { path: '/dashboard/profile', label: 'Mi Perfil', icon: '👤' },
    ];

    const roleSpecificItems = {
      CLIENT: [
        { path: '/dashboard/appointments', label: 'Mis Citas', icon: '📅' },
        { path: '/dashboard/psychologists', label: 'Buscar Psicólogos', icon: '🔍' },
      ],
      PSYCHOLOGIST: [
        { path: '/dashboard/schedule', label: 'Mi Agenda', icon: '📅' },
        { path: '/dashboard/patients', label: 'Mis Pacientes', icon: '👥' },
        { path: '/dashboard/documents', label: 'Mis Documentos', icon: '📄' },
      ],
      ADMIN: [
        { path: '/dashboard/users', label: 'Usuarios', icon: '👥' },
        { path: '/dashboard/psychologists', label: 'Psicólogos', icon: '🧑‍⚕️' },
        { path: '/dashboard/verifications', label: 'Verificaciones', icon: '✅' },
        { path: '/dashboard/reports', label: 'Reportes', icon: '📊' },
      ],
    };

    return [...commonItems, ...(roleSpecificItems[userType || 'CLIENT'] || [])];
  };

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg">
      <nav className="mt-8">
        {getMenuItems().map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#2A6877] transition-colors ${
              location.pathname === item.path ? 'bg-gray-50 text-[#2A6877] border-r-4 border-[#2A6877]' : ''
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;