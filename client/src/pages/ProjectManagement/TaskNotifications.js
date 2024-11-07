// TaskNotifications.js
import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../../services/notificationService';

const TaskNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  return (
    <div className="task-notifications bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Real-Time Task Notifications</h2>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>{notif.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskNotifications;