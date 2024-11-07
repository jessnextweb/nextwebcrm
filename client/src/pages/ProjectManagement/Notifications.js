// Notifications.js
import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../../services/notificationService';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  return (
    <div className="notifications bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>{notif.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;