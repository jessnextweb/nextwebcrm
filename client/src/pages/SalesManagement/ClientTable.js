// ClientTable.js
import React, { useState, useEffect } from 'react';
import { fetchClients } from '../../services/clientService';

const ClientTable = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const data = await fetchClients();
        setClients(data);
      } catch (error) {
        console.error('Failed to fetch clients:', error);
      }
    };

    getClients();
  }, []);

  return (
    <div className="client-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Client Management</h2>
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Purchase History</th>
            <th>Communication Logs</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              {/* Check if purchaseHistory exists and is an array */}
              <td>{Array.isArray(client.purchaseHistory) ? client.purchaseHistory.join(', ') : 'No Purchase History'}</td>
              <td>{client.communicationLogs || 'No Communication Logs'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
