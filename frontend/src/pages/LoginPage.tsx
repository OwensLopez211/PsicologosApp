import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import PageTransition from '../components/PageTransition';

// Remove isCheckingAuth state and useEffect for redirection
const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await login(formData.email, formData.password);
      setUser(response.user);
      
      // Redirect based on user type
      switch (response.user.user_type) {
        case 'CLIENT':
          navigate('/dashboard');
          break;
        case 'PSYCHOLOGIST':
          navigate('/psicologo/dashboard');
          break;
        case 'ADMIN':
          navigate('/admin/dashboard');
          break;
      }
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-[#B4E4D3] to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {/* Remove AnnouncementBar component from here */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className="block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2A6877] to-[#B4E4D3] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              className="relative mx-auto h-20 w-auto rounded-md shadow-lg transform group-hover:scale-105 transition duration-300"
              src="/logo.jpeg"
              alt="MentAliza"
            />
          </Link>
          <h2 className="mt-8 text-center text-4xl font-bold text-[#2A6877]">
            Iniciar sesión
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link to="/registro" className="font-semibold text-[#2A6877] hover:text-[#235A67] underline decoration-2 decoration-[#B4E4D3] underline-offset-2">
              Regístrate aquí
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-2xl rounded-xl sm:px-10 border border-gray-100">
            {error && (
              <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A6877] focus:border-transparent transition-all duration-300"
                    placeholder="tu@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A6877] focus:border-transparent transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                    className="h-4 w-4 text-[#2A6877] focus:ring-[#2A6877] border-gray-300 rounded transition-colors duration-200"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Recordarme
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/recuperar-password" className="font-medium text-[#2A6877] hover:text-[#235A67] underline decoration-2 decoration-[#B4E4D3] underline-offset-2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-semibold text-white bg-[#2A6877] hover:bg-[#235A67] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A6877] transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LoginPage;