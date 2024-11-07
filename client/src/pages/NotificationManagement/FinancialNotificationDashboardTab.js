// FinancialNotificationDashboardTab.js
import React, { useState, useEffect } from 'react';
import FinancialNotificationForm from './FinancialNotificationForm';
import FinancialNotificationTable from './FinancialNotificationTable';
import FinancialNotificationSettings from './FinancialNotificationSettings';
import {
  fetchFinancialNotifications,
  createFinancialNotification,
  updateFinancialNotification,
  deleteFinancialNotification,
} from '../../services/financialNotificationService';

const FinancialNotificationDashboardTab = () => {
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({});
  const [editingNotification, setEditingNotification] = useState(null);

  useEffect(() => {
    fetchFinancialNotifications().then(setNotifications);
  }, []);

  const createNewNotification = async (notification) => {
    const newNotification = await createFinancialNotification(notification);
    setNotifications([...notifications, newNotification]);
  };

  const editNotification = (notification) => {
    setEditingNotification(notification);
  };

  const saveUpdatedNotification = async (updated) => {
    await updateFinancialNotification(updated.id, updated);
    setNotifications(
      notifications.map((notif) => (notif.id === updated.id ? updated : notif))
    );
    setEditingNotification(null);
  };

  const removeNotification = async (notificationId) => {
    await deleteFinancialNotification(notificationId);
    setNotifications(notifications.filter((notif) => notif.id !== notificationId));
  };

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="financial-notification-dashboard bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Payment & Financial Notifications</h2>
      {editingNotification ? (
        <FinancialNotificationForm
          notification={editingNotification}
          saveNotification={saveUpdatedNotification}
          cancelEdit={() => setEditingNotification(null)}
        />
      ) : (
        <>
          <FinancialNotificationForm createNewNotification={createNewNotification} />
          <FinancialNotificationTable
            notifications={notifications}
            deleteNotification={removeNotification}
            editNotification={editNotification}
          />
        </>
      )}
      <FinancialNotificationSettings saveSettings={saveSettings} />
    </div>
  );
};

export default FinancialNotificationDashboardTab;