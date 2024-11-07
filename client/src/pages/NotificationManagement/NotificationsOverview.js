// NotificationsOverview.js
import React, { useState } from 'react';
import NotificationForm from './NotificaitonForm';
import NotificationList from './NotificationList';
import AIAlertNotification from './AIAlertNotification';

const NotificationsOverview = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('');

  const addNotification = (notification) => {
    setNotifications([...notifications, notification]);
  };

  const deleteNotification = (index) => {
    const newNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(newNotifications);
  };

  return (
    <div className="notifications-overview p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications Overview</h1>
      <NotificationForm onAddNotification={addNotification} />
      <div className="mt-4">
        <label className="block mb-2">Filter by Priority:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded-md w-full">
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <NotificationList notifications={notifications} filter={filter} onDelete={deleteNotification} />
      <AIAlertNotification />
    </div>
  );
};

export default NotificationsOverview;
