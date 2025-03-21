import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useLocation } from 'react-router-dom';

type UserType = 'patient' | 'psychologist' | null;

const RegisterPage = () => {
  const location = useLocation();
  const [userType, setUserType] = useState<UserType>(location.state?.userType || null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', { ...formData, userType });
  };

  if (!userType) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Link to="/">
              <img className="mx-auto h-16 w-auto rounded-md" src="/logo.jpeg" alt="MentAliza" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Crear una cuenta</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="font-medium text-[#2A6877] hover:text-[#235A67]">
                Inicia sesión aquí
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
              <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">
                Selecciona el tipo de cuenta
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => setUserType('patient')}
                  className="w-full flex items-center justify-center px-4 py-4 border-2 rounded-lg hover:border-[#2A6877] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A6877] transition-colors"
                >
                  <span className="text-lg font-medium">Soy Paciente</span>
                </button>
                <button
                  onClick={() => setUserType('psychologist')}
                  className="w-full flex items-center justify-center px-4 py-4 border-2 rounded-lg hover:border-[#2A6877] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A6877] transition-colors"
                >
                  <span className="text-lg font-medium">Soy Psicólogo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/">
            <img className="mx-auto h-16 w-auto rounded-md" src="/logo.jpeg" alt="MentAliza" />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Registro como {userType === 'patient' ? 'Paciente' : 'Psicólogo'}
          </h2>
          <button 
            onClick={() => setUserType(null)}
            className="mt-2 text-center text-sm text-[#2A6877] hover:text-[#235A67] block mx-auto"
          >
            Cambiar tipo de cuenta
          </button>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2A6877] focus:border-[#2A6877]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2A6877] focus:border-[#2A6877]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2A6877] focus:border-[#2A6877]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirmar contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2A6877] focus:border-[#2A6877]"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  className="h-4 w-4 text-[#2A6877] focus:ring-[#2A6877] border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  Acepto los{' '}
                  <Link to="/terminos" className="text-[#2A6877] hover:text-[#235A67]">
                    términos y condiciones
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2A6877] hover:bg-[#235A67] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A6877]"
                >
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RegisterPage;