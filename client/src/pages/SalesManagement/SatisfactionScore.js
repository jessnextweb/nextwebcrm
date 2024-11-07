// SatisfactionScore.js
import React, { useState, useEffect } from 'react';
import { fetchClientSatisfaction } from '../services/clientService';

const SatisfactionScore = () => {
  const [satisfactionScores, setSatisfactionScores] = useState([]);

  useEffect(() => {
    fetchClientSatisfaction().then((data) => setSatisfactionScores(data));
  }, []);

  return (
    <div className="satisfaction-score bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Client Satisfaction (NPS)</h2>
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>NPS Score</th>
          </tr>
        </thead>
        <tbody>
          {satisfactionScores.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.nps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SatisfactionScore;