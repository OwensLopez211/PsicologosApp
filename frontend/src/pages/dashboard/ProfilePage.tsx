import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Mi Perfil</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700">Información Personal</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-[#2A6877] hover:text-[#235A67]"
            >
              {isEditing ? 'Guardar' : 'Editar'}
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Nombre</label>
              <input
                type="text"
                disabled={!isEditing}
                defaultValue={user?.first_name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Apellido</label>
              <input
                type="text"
                disabled={!isEditing}
                defaultValue={user?.last_name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                disabled
                defaultValue={user?.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;