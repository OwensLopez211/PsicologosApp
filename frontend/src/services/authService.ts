import axios from 'axios';
import api from './api';

const API_URL = 'http://localhost:8000/api';

interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    email: string;
    user_type: 'CLIENT' | 'PSYCHOLOGIST' | 'ADMIN';
    first_name: string;
    last_name: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/auth/login/`, { email, password });
  if (response.data.access) {
    localStorage.setItem('token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response.data;
};

export const refreshToken = async () => {
  const refresh = localStorage.getItem('refresh_token');
  if (!refresh) throw new Error('No refresh token available');
  
  try {
    const response = await axios.post(`${API_URL}/auth/token/refresh/`, {
      refresh
    });
    
    if (response.data.access) {
      localStorage.setItem('token', response.data.access);
      return response.data.access;
    }
  } catch (error) {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    throw error;
  }
};
