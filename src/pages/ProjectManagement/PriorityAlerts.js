// PriorityAlerts.js
import React, { useEffect, useState } from 'react';

const PriorityAlerts = ({ risks }) => {
  const [highPriorityRisks, setHighPriorityRisks] = useState([]);

  useEffect(() => {
    const criticalRisks = risks.filter((risk) => risk.priority === 'High' && risk.status === 'Open');
    setHighPriorityRisks(criticalRisks);
  }, [risks]);

  return (
    <div className="priority-alerts bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">High-Priority Alerts</h2>
      {highPriorityRisks.length > 0 ? (
        <ul>
          {highPriorityRisks.map((risk, index) => (
            <li key={index} className="text-red-500">
              ⚠️ {risk.name} - Potential Impact: {risk.potentialImpact}
            </li>
          ))}
        </ul>
      ) : (
        <p>No high-priority risks at the moment.</p>
      )}
    </div>
  );
};

export default PriorityAlerts;