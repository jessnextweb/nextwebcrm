// NotificationSettingsTab.js
import React from 'react';
import NotificationSettingsForm from './NotificationSettingsForm';

const NotificationSettingsTab = () => {
  return (
    <div className="notification-settings-tab bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
      <NotificationSettingsForm />
    </div>
  );
};

export default NotificationSettingsTab;