import { useAuth } from '../../context/AuthContext';

const DashboardHome = () => {
  const { user } = useAuth();

  const getWelcomeMessage = () => {
    switch (user?.user_type) {
      case 'CLIENT':
        return 'Bienvenido a tu espacio personal';
      case 'PSYCHOLOGIST':
        return 'Bienvenido a tu portal profesional';
      case 'ADMIN':
        return 'Panel de Administración';
      default:
        return 'Bienvenido';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{getWelcomeMessage()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Widgets específicos según el tipo de usuario se agregarán aquí */}
      </div>
    </div>
  );
};

export default DashboardHome;