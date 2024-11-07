// MilestoneAlerts.js
import React, { useEffect, useState } from 'react';

const MilestoneAlerts = ({ milestones }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const upcomingMilestones = milestones.filter((milestone) => {
      const today = new Date();
      console.log("today",today);
      const deadline = new Date(milestone.deadline);
      console.log("deadline",deadline);
      const diffInDays = (deadline - today) / (1000 * 60 * 60 * 24);
      console.log("diffInDays",diffInDays);
      return diffInDays <= 3 && milestone.status === 'Pending';
    });
    setAlerts(upcomingMilestones);
  }, [milestones]);

  return (
    <div className="milestone-alerts bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Milestone Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            ⚠️ <strong>{alert.name}</strong> is approaching its deadline: {alert.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MilestoneAlerts;