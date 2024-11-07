// clientService.js
import axios from 'axios';

// export const fetchClients = async () => {
//   const response = await axios.get('/api/clients');
//   return response.data;
// };

export const fetchClientsBySegment = async (segment) => {
  const response = await axios.get(`/api/clients/segment/${segment}`);
  return response.data;
};

export const fetchClientSatisfaction = async () => {
  const response = await axios.get('/api/clients/satisfaction');
  return response.data;
};