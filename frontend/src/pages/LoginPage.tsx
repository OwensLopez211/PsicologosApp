import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

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
      <div className="min-h-screen bg-gradient-to-br from-[#B4E4D3] via-white to-[#B4E4D3]/30 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2A6877] to-[#B4E4D3] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                className="relative mx-auto h-24 w-24 rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300"
                src="/logo.jpeg"
                alt="Bienestar"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="mt-8 text-center text-4xl font-bold text-[#2A6877]">
              Bienvenido de nuevo
            </h2>
            <p className="mt-3 text-center text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link to="/registro" className="font-semibold text-[#2A6877] hover:text-[#235A67] underline decoration-2 decoration-[#B4E4D3] underline-offset-2">
                Regístrate aquí
              </Link>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-sm py-8 px-6 shadow-2xl rounded-2xl sm:px-10 border border-white/20">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </motion.div>
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
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2A6877] to-[#235A67] hover:from-[#235A67] hover:to-[#1D4B56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A6877] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Iniciando sesión...
                      </div>
                    ) : (
                      'Iniciar sesión'
                    )}
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default LoginPage;