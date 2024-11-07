// Clients.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Table from '../components/Table';
import { fetchClients } from '../services/clientService';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients().then((res) => {
      setClients(res.data);
    });
  }, []);

  const headers = ['Name', 'Email', 'Company', 'Status'];

  const data = clients.map((client) => [
    client.name,
    client.email,
    client.company,
    client.status
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header adminName="Admin" />
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Clients</h1>
          <Table headers={headers} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
