// MarketingNotificationDashboardTab.js
import React, { useState, useEffect } from 'react';
import MarketingNotificationForm from './MarketingNotificationForm';
import MarketingNotificationTable from './MarketingNotificationTable';
import MarketingNotificationSettings from './MarketingNotificationSettings';
import {
  fetchMarketingNotifications,
  createMarketingNotification,
  updateMarketingNotification,
  deleteMarketingNotification,
} from '../../services/marketingNotificationService';

const MarketingNotificationDashboardTab = () => {
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({});
  const [editingNotification, setEditingNotification] = useState(null);

  useEffect(() => {
    fetchMarketingNotifications().then(setNotifications);
  }, []);

  const createNewNotification = async (notification) => {
    const newNotification = await createMarketingNotification(notification);
    setNotifications([...notifications, newNotification]);
  };

  const editNotification = (notification) => {
    setEditingNotification(notification);
  };

  const saveUpdatedNotification = async (updated) => {
    await updateMarketingNotification(updated.id, updated);
    setNotifications(
      notifications.map((notif) => (notif.id === updated.id ? updated : notif))
    );
    setEditingNotification(null);
  };

  const removeNotification = async (notificationId) => {
    await deleteMarketingNotification(notificationId);
    setNotifications(notifications.filter((notif) => notif.id !== notificationId));
  };

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="marketing-notification-dashboard bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Marketing & Campaign Notifications</h2>
      {editingNotification ? (
        <MarketingNotificationForm
          notification={editingNotification}
          saveNotification={saveUpdatedNotification}
          cancelEdit={() => setEditingNotification(null)}
        />
      ) : (
        <>
          <MarketingNotificationForm createNewNotification={createNewNotification} />
          <MarketingNotificationTable
            notifications={notifications}
            deleteNotification={removeNotification}
            editNotification={editNotification}
          />
        </>
      )}
      <MarketingNotificationSettings saveSettings={saveSettings} />
    </div>
  );
};

export default MarketingNotificationDashboardTab;