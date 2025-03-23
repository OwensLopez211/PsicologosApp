import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SpecialistPage from './pages/SpecialistPage';
import DashboardHome from './pages/dashboard/DashboardHome';
import ProfilePage from './pages/dashboard/ProfilePage';
import SchedulePage from './pages/dashboard/SchedulePage';
import PatientsPage from './pages/dashboard/PatientsPage';
import DocumentsPage from './pages/dashboard/DocumentsPage';
import UsersPage from './pages/dashboard/UsersPage';
import VerificationsPage from './pages/dashboard/VerificationsPage';
import PublicRoute from './components/PublicRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } />
              <Route path="/registro" element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              } />
              <Route path="/especialistas" element={<SpecialistPage />} />
              <Route path="/quienes-somos" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Route>

            {/* Client Dashboard routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>

            {/* Psychologist Dashboard routes */}
            <Route path="/psicologo/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="agenda" element={<SchedulePage />} />
              <Route path="pacientes" element={<PatientsPage />} />
              <Route path="documentos" element={<DocumentsPage />} />
            </Route>

            {/* Admin Dashboard routes */}
            <Route path="/admin/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="usuarios" element={<UsersPage />} />
              <Route path="verificaciones" element={<VerificationsPage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
