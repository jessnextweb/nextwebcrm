// ClientManagement.js
import React, { useState, useEffect } from 'react';
import { fetchClients, addClient, updateClient, deleteClient } from '../../services/clientService';

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    fetchClients().then(data => {
      console.log("sample",data)
      setClients(data)});
  }, []); 

  const handleAddClient = () => {
    console.log("newtoadd",newClient)
    addClient(newClient).then(client => {
      console.log("make to add", client)
      setClients([...clients, client]);
      setNewClient({ name: '', email: '', phone: '' });
    });
  };

  const handleUpdateClient = (id) => {
    const updatedClient = prompt('Update client info as "name,email,phone"');
    
    if (updatedClient) { // Check if user didn't click "Cancel"
      const [name, email, phone] = updatedClient.split(',');
      console.log("Updating client ID:", id, "with data:", { name, email, phone }); // Log update details
  
      updateClient(id, { name, email, phone }).then((updated) => {
        console.log("Client updated:", updated); // Log updated client
        setClients(clients.map(client => (client.id === id ? updated : client)));
      });
    } else {
      console.log("Update cancelled by the user.");
    }
  };
  

  // const handleUpdateClient = (id) => {
  //   const updatedClient = prompt('Update client info as "name,email,phone"');
  //   if (updatedClient) {
  //     const [name, email, phone] = updatedClient.split(',');
  //     console.log("Updating client ID:", id, "with data:", { name, email, phone }); // Log update details

  //     updateClient(id, { name, email, phone }).then((updated) => {
  //       console.log("Client updated:", updated); // Log updated client
  //       setClients(clients.map(client => (client.id === id ? updated : client)));
  //     });
  //   }
  // };


  const handleDeleteClient = (id) => {
    deleteClient(id).then(() => {
      setClients(clients.filter(client => client.id !== id));
    });
  };

  return (
    <div className="client-management bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Client Management</h2>
      
      <div className="mb-4">
        <input
          className="border rounded p-2 mr-2"
          placeholder="Name"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
        />
        <input
          className="border rounded p-2 mr-2"
          placeholder="Email"
          value={newClient.email}
          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
        />
        <input
          className="border rounded p-2 mr-2"
          placeholder="Phone"
          value={newClient.phone}
          onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
        />
        <button className="bg-blue-500 text-white rounded p-2" onClick={handleAddClient}>Add Client</button>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client,index) => (
            <tr key={`${client.id}-${index}`} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2">{client.phone}</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline mr-2" onClick={() => handleUpdateClient(client.id)}>Edit</button>
                <button className="text-red-500 hover:underline" onClick={() => handleDeleteClient(client.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientManagement;
