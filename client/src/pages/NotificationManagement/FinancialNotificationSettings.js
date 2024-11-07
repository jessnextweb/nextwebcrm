// FinancialNotificationSettings.js
import React, { useState } from 'react';

const FinancialNotificationSettings = ({ saveSettings }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setSettings({ ...settings, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSettings(settings);
  };

  return (
    <div className="financial-notification-settings bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Financial Notification Preferences</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleInputChange}
              className="mr-2"
            />
            Email Notifications
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name="smsNotifications"
              checked={settings.smsNotifications}
              onChange={handleInputChange}
              className="mr-2"
            />
            SMS Notifications
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name="pushNotifications"
              checked={settings.pushNotifications}
              onChange={handleInputChange}
              className="mr-2"
            />
            Push Notifications
          </label>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default FinancialNotificationSettings;