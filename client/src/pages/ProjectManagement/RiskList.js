// RiskList.js
import React from 'react';

const RiskList = ({ risks }) => {
  return (
    <div className="risk-list bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Tracked Risks</h2>
      <ul>
        {risks.map((risk, index) => (
          <li key={index} className={`mb-2 ${risk.priority === 'High' ? 'text-red-500' : ''}`}>
            <strong>{risk.name}</strong> - Priority: {risk.priority} - Status: {risk.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiskList;