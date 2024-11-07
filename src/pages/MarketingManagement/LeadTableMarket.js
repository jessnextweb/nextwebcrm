// LeadTable.js
import React, { useState, useEffect } from 'react';
import { fetchLeads } from '../../services/leadService';

const LeadTableMarket = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads().then((data) => setLeads(data));
  }, []);

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Lead Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Lead Score</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
              <td>{lead.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTableMarket;