// // notificationService.js
// export const fetchNotifications = async () => {
//     try {
//       // Using JSONPlaceholder to simulate fetching notifications
//       const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your actual API endpoint
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch notifications');
//       }
      
//       const data = await response.json();
      
//       // Transform the data to fit the notification format you need
//       const notifications = data.map(notification => ({
//         id: notification.id,
//         title: notification.title,
//         body: notification.body,
//       }));
      
//       return notifications; // Assuming the API returns a list of notifications
//     } catch (error) {
//       console.error('Error fetching notifications:', error);
//       return []; // Return an empty array on error
//     }
//   };
  


// notificationService.js
// export const fetchNotifications = async () => {
//   return [
//     { title: 'Budget Deadline', message: 'Budget review is due tomorrow.' },
//     { title: 'Resource Availability', message: 'Equipment X will be unavailable next week.' },
//   ];
// };



export const fetchNotifications = async () => {
  const response = await fetch('https://retoolapi.dev/Lk9A7S/data');
  return response.json();
};

export const createNotification = async (notification) => {
  const response = await fetch('https://retoolapi.dev/Lk9A7S/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notification),
  });
  return response.json();
};

export const updateNotification = async (notificationId, updatedNotification) => {
  const response = await fetch(`https://retoolapi.dev/Lk9A7S/data`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedNotification),
  });
  return response.json();
};

export const deleteNotification = async (notificationId) => {
  const response = await fetch(`https://retoolapi.dev/Lk9A7S/data`, {
    method: 'DELETE',
  });
  return response.json();
};

