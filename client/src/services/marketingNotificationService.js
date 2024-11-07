// marketingNotificationService.js
export const fetchMarketingNotifications = async () => {
    const response = await fetch('https://retoolapi.dev/rnAmIt/data');
    return response.json();
  };
  
  export const createMarketingNotification = async (notification) => {
    const response = await fetch('https://retoolapi.dev/khAESQ/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(notification),
    });
    return response.json();
  };
  
  export const updateMarketingNotification = async (notificationId, updatedNotification) => {
    const response = await fetch(`https://retoolapi.dev/khAESQ/data`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNotification),
    });
    return response.json();
  };
  
  export const deleteMarketingNotification = async (notificationId) => {
    const response = await fetch(`https://retoolapi.dev/khAESQ/data`, {
      method: 'DELETE',
    });
    return response.json();
  };