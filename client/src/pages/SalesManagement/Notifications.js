// Notifications.js
import React, { useState, useEffect } from 'react';
import { fetchNotifications } from '../../services/notificationService';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications().then((data) => setNotifications(data));
  }, []);

  return (
    <div className="notifications bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Notifications & Alerts</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="mb-2">
            <strong>{notification.title}:</strong> {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;