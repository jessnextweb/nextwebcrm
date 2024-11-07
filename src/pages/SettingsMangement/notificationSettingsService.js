// notificationSettingsService.js
export const fetchNotificationSettings = async () => {
    const response = await fetch('/api/notification-settings');
    return response.json();
  };
  
  export const updateNotificationSettings = async (settings) => {
    const response = await fetch('/api/notification-settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    return response.json();
  };