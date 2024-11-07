// financialNotificationService.js
export const fetchFinancialNotifications = async () => {
    const response = await fetch('https://retoolapi.dev/21hacj/data');
    return response.json();
  };
  
  export const createFinancialNotification = async (notification) => {
    const response = await fetch('/api/financial-notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(notification),
    });
    return response.json();
  };
  
  export const updateFinancialNotification = async (notificationId, updatedNotification) => {
    const response = await fetch(`/api/financial-notifications/${notificationId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNotification),
    });
    return response.json();
  };
  
  export const deleteFinancialNotification = async (notificationId) => {
    const response = await fetch(`/api/financial-notifications/${notificationId}`, {
      method: 'DELETE',
    });
    return response.json();
  };