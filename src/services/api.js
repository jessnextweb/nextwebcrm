// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// export const login = (email, password) => {
//   return axios.post(`${API_URL}/login`, { email, password });
// };

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Set up Axios to attach JWT token to every request
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Example of a protected API call (Admin Dashboard)
export const fetchAdminDashboard = async () => {
  return axios.get(`${API_URL}/admin/dashboard`);
};