import axios from 'axios';
import { refreshToken } from './authService';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        toast.error('Su sesión ha expirado por inactividad', {
          duration: 4000,
          position: 'top-center',
        });
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;