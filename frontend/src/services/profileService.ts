import api from './api';
import { PsychologistProfile, BasicProfileData } from '../types/psychologist';

export const getPsychologistProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await api.get('/api/psicologo/profile/', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

export const updatePsychologistProfile = async (data: Partial<PsychologistProfile>) => {
  console.log('Original data:', data);
  
  // Transform the data to match Django model fields
  const transformedData = {
    first_name: data.firstName || data.first_name,
    last_name: data.lastName || data.last_name,
    email: data.email,
    phone: data.phone,
    rut: data.rut,
    gender: data.gender,
    profile_image: data.profileImage || data.profile_image,
    region: data.region,
    city: data.city
  };
  
  console.log('Transformed data:', transformedData);

  const token = localStorage.getItem('token');
  try {
    const response = await api.patch('/api/psicologo/profile/', transformedData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error details:', error.response?.data);
    throw error;
  }
};