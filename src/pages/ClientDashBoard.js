import React from 'react';
import Dashboard from '../pages/ClientManagement/Dashboard';         // Adjust the path as needed

const ClientDashboard = ({ projects, invoices }) => {
  return (
    <div className="p-6">
        <h1>fheu</h1>
      <Dashboard projects={projects} invoices={invoices} />
      
    </div>
  );
};

export default ClientDashboard;
