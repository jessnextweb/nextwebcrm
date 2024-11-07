// NotificationSettingsForm.js
import React, { useState, useEffect } from 'react';
import { fetchNotificationSettings, updateNotificationSettings } from '../../services/notificationService.js';

const NotificationSettingsForm = () => {
  const [settings, setSettings] = useState({
    emailNotifications: false,
    smsNotifications: false,
    pushNotifications: true,
    frequency: 'Daily',
  });

  useEffect(() => {
    const getSettings = async () => {
      const fetchedSettings = await fetchNotificationSettings();
      setSettings(fetchedSettings);
    };

    getSettings();
  }, []);

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNotificationSettings(settings);
    alert('Notification settings updated successfully!');
  };

  return (
    <div className="notification-settings-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
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
        <div className="mb-4">
          <label>Notification Frequency:</label>
          <select
            name="frequency"
            value={settings.frequency}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Instant">Instant</option>
            <option value="Hourly">Hourly</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default NotificationSettingsForm;
