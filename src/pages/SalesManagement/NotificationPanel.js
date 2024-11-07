import React, { useEffect, useState } from 'react';


const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);

  // Dummy notification data
  const dummyNotification = {
    title: 'New Message!',
    body: 'You have a new message from the system.',
  };

  useEffect(() => {
    // Simulate receiving a real-time notification after 5 seconds
    const timer = setTimeout(() => {
      setNotifications((prev) => [...prev, dummyNotification]);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
   
    <div className="notifications bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Real-Time Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2">
            <strong>{notification.title}</strong> - {notification.body}
          </li>
        ))}
      </ul>
    </div>
  
  );
};

export default NotificationPanel;

// import React, { useEffect, useState } from 'react';
// import { handleForegroundMessages } from '../Firebase'; // Import the function for handling foreground messages

// const NotificationPanel = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Listen for foreground notifications
//     handleForegroundMessages((payload) => {
//       setNotifications((prev) => [...prev, payload.notification]);
//     });
//   }, []);

//   return (
//     <div className="notifications bg-white p-4 shadow-md rounded-md">
//       <h2 className="text-lg font-semibold mb-4">Real-Time Notifications</h2>
//       <ul>
//         {notifications.map((notification, index) => (
//           <li key={index} className="mb-2">
//             <strong>{notification.title}</strong> - {notification.body}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NotificationPanel;
