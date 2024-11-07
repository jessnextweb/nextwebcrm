// clientService.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchClients = () => axios.get(API_URL).then(res => res.data);

export const addClient = (client) => axios.post(API_URL, client).then(res => res.data);

export const updateClient = (id, client) => axios.put(`${API_URL}/${id}`, client).then(res => res.data);

export const deleteClient = (id) => axios.delete(`${API_URL}/${id}`);



// New exportClientData function
export const exportClientData = async () => {
    // Example logic to export client data (adjust as necessary)
    const clients = await fetchClients();
    
    // Perform the export logic, such as formatting data and downloading as CSV
    const csvContent = clients.map(client => `${client.id},${client.name},${client.email}`).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'clients.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
