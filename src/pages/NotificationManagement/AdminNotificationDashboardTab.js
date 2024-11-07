// AdminNotificationDashboardTab.js
import React, { useState, useEffect } from 'react';
import AdminNotificationForm from './AdminNotificationForm';
import AdminNotificationTable from './AdminNotificationTable';
import AdminNotificationSettings from './AdminNotificationSettings';
import {
  fetchAdminNotifications,
  createAdminNotification,
  updateAdminNotification,
  deleteAdminNotification,
} from '../../services/adminNotificationService';

const AdminNotificationDashboardTab = () => {
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({});
  const [editingNotification, setEditingNotification] = useState(null);

  useEffect(() => {
    fetchAdminNotifications().then(setNotifications);
  }, []);

  const createNewNotification = async (notification) => {
    const newNotification = await createAdminNotification(notification);
    setNotifications([...notifications, newNotification]);
  };

  const editNotification = (notification) => {
    setEditingNotification(notification);
  };

  const saveUpdatedNotification = async (updated) => {
    await updateAdminNotification(updated.id, updated);
    setNotifications(
      notifications.map((notif) => (notif.id === updated.id ? updated : notif))
    );
    setEditingNotification(null);
  };

  const removeNotification = async (notificationId) => {
    await deleteAdminNotification(notificationId);
    setNotifications(notifications.filter((notif) => notif.id !== notificationId));
  };

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="admin-notification-dashboard bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">System & Admin Notifications</h2>
      {editingNotification ? (
        <AdminNotificationForm
          notification={editingNotification}
          saveNotification={saveUpdatedNotification}
          cancelEdit={() => setEditingNotification(null)}
        />
      ) : (
        <>
          <AdminNotificationForm createNewNotification={createNewNotification} />
          <AdminNotificationTable
            notifications={notifications}
            deleteNotification={removeNotification}
            editNotification={editNotification}
          />
        </>
      )}
      <AdminNotificationSettings saveSettings={saveSettings} />
    </div>
  );
};

export default AdminNotificationDashboardTab;