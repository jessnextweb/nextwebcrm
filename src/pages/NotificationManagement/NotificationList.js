// NotificationList.js
import React from 'react';

const NotificationList = ({ notifications, filter, onDelete }) => {
  const filteredNotifications = notifications.filter(notification => 
    filter ? notification.priorityLevel === filter : true
  );

  return (
    <div className="notification-list mt-4">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul className="list-disc pl-5">
        {filteredNotifications.map((notification, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{notification.notificationType} - <span className="text-gray-500">{notification.priorityLevel}</span> ({notification.userRole})</span>
            <button onClick={() => onDelete(index)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
