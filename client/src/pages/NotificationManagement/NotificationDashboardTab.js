// NotificationDashboardTab.js
import React, { useState, useEffect } from 'react';
import NotificationForm from './NotificationForm';
import NotificationTable from './NotificationTable';
import NotificationSettings from './NotificationSettings';
import {
  fetchNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
} from '../../services/notificationService';

const NotificationDashboardTab = () => {
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({});
  const [editingNotification, setEditingNotification] = useState(null);

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  const createNewNotification = async (notification) => {
    const newNotification = await createNotification(notification);
    setNotifications([...notifications, newNotification]);
  };

  const editNotification = (notification) => {
    setEditingNotification(notification);
  };

  const saveUpdatedNotification = async (updatedNotification) => {
    const updated = await updateNotification(updatedNotification.id, updatedNotification);
    setNotifications(
      notifications.map((notif) => (notif.id === updated.id ? updated : notif))
    );
    setEditingNotification(null);
  };

  const removeNotification = async (notificationId) => {
    await deleteNotification(notificationId);
    setNotifications(notifications.filter((notif) => notif.id !== notificationId));
  };

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="notification-dashboard bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Task & Project Notifications</h2>
      {editingNotification ? (
        <NotificationForm
          notification={editingNotification}
          saveNotification={saveUpdatedNotification}
          cancelEdit={() => setEditingNotification(null)}
        />
      ) : (
        <>
          <NotificationForm createNewNotification={createNewNotification} />
          <NotificationTable
            notifications={notifications}
            deleteNotification={removeNotification}
            editNotification={editNotification}
          />
        </>
      )}
      <NotificationSettings saveSettings={saveSettings} />
    </div>
  );
};

export default NotificationDashboardTab;