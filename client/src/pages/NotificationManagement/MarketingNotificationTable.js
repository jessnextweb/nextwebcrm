// MarketingNotificationTable.js
import React from 'react';

const MarketingNotificationTable = ({ notifications, deleteNotification, editNotification }) => {
  return (
    <div className="marketing-notification-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Current Marketing Notifications</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Notification Name</th>
            <th>Type</th>
            <th>Trigger Time</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td>{notification.name}</td>
              <td>{notification.type}</td>
              <td>{notification.triggerTime}</td>
              <td>{notification.description}</td>
              <td>
                <button
                  onClick={() => editNotification(notification)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketingNotificationTable;