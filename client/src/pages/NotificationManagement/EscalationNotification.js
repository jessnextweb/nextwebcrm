// EscalationNotification.js
import React, { useEffect, useState } from 'react';
import { fetchEscalatedAlerts } from '../services/escalationService';

const EscalationNotification = () => {
  const [escalatedAlerts, setEscalatedAlerts] = useState([]);

  useEffect(() => {
    fetchEscalatedAlerts().then(data => setEscalatedAlerts(data));
  }, []);

  return (
    <div className="escalation-notification bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Escalation Notifications</h2>
      <ul className="list-disc pl-5">
        {escalatedAlerts.map((alert, index) => (
          <li key={index}>
            {alert.message} - <span className="text-red-500">Escalated to: {alert.escalatedTo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EscalationNotification;