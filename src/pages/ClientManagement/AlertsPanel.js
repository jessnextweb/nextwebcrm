// AlertsPanel.js
import React, { useEffect, useState } from 'react';
import { fetchAlerts } from '../../services/reminderService.js';

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts().then(data => setAlerts(data));
  }, []);

  return (
    <div className="alerts-panel bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Real-Time Alerts</h2>
      <ul className="list-disc pl-5">
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <li key={index} className="mb-2">
              <strong>{alert.message}</strong> - {alert.timestamp}
            </li>
          ))
        ) : (
          <p>No alerts at the moment.</p>
        )}
      </ul>
    </div>
  );
};

export default AlertsPanel;