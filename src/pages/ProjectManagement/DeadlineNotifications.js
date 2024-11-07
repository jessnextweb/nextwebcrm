// DeadlineNotifications.js
import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../../services/notificationService';

const DeadlineNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  return (
    <div className="notifications bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Deadline Alerts</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2">
            <strong>{notification.title}</strong>: {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeadlineNotifications;