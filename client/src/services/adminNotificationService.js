// adminNotificationService.js
export const fetchAdminNotifications = async () => {
    const response = await fetch('https://retoolapi.dev/8yzohj/data');
    return response.json();
  };
  
  export const createAdminNotification = async (notification) => {
    const response = await fetch('https://retoolapi.dev/8yzohj/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(notification),
    });
    return response.json();
  };
  
  export const updateAdminNotification = async (notificationId, updatedNotification) => {
    const response = await fetch(`https://retoolapi.dev/8yzohj/data`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNotification),
    });
    return response.json();
  };
  
  export const deleteAdminNotification = async (notificationId) => {
    const response = await fetch(`https://retoolapi.dev/8yzohj/data`, {
      method: 'DELETE',
    });
    return response.json();
  };