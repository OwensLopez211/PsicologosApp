import axios from 'axios';

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
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response.data;
};