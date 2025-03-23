import { useAuth } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-40">
        <DashboardHeader />
      </div>
      <div className="flex pt-16">
        <Sidebar userType={user?.user_type} />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;