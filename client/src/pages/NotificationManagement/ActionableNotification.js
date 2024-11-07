// ActionableNotification.js
import React from 'react';

const ActionableNotification = ({ notification, onAction }) => {
  return (
    <div className="actionable-notification bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Notification</h2>
      <p>{notification.message}</p>
      <div className="actions mt-4">
        {notification.actions.map((action, index) => (
          <button key={index} onClick={() => onAction(action)} className="bg-blue-500 text-white p-2 rounded-md mr-2">
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionableNotification;