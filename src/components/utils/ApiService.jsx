import axios from 'axios';

const AxiosService = axios.create({
  baseURL: 'https://capstone-backend-7.onrender.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

AxiosService.interceptors.request.use((config) => {
  const authToken = sessionStorage.getItem('authToken');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export default AxiosService;
