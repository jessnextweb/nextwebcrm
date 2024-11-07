// LeadsTable.js
import React, { useState, useEffect } from 'react';
import LeadDetailsModal from './LeadDetailsModal';
import { fetchLeads } from '../../services/leadService';


const LeadsTable = () => {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchLeads().then((data) =>{
      console.log("fetchleads", data);
      setLeads(data)}); 
  }, []);

  const openModal = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLead(null);
    setIsModalOpen(false);
  };

  return (

    <div className="leads-table bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-6">Leads Management</h2>
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr>
            <th>Lead Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Lead Source</th>
            <th>Lead Score</th>
            <th>Lead Owner</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.source}</td>
              <td>{lead.score}</td>
              <td>{lead.owner}</td>
              <td>{lead.status}</td>
              <td>
                <button
                  onClick={() => openModal(lead)}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  View/Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <LeadDetailsModal lead={selectedLead} closeModal={closeModal} />
      )}
    </div>
   
  );
};

export default LeadsTable;