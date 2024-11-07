// AdminNotificationForm.js
import React, { useState } from 'react';

const AdminNotificationForm = ({ createNewNotification }) => {
  const [notification, setNotification] = useState({
    title: '',
    type: 'System Alert',
    priority: 'High',
    message: '',
  });

  const handleInputChange = (e) => {
    setNotification({ ...notification, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewNotification(notification);
    setNotification({ title: '', type: 'System Alert', priority: 'High', message: '' });
  };

  return (
    <div className="admin-notification-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Create New Admin Notification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Notification Title:</label>
          <input
            type="text"
            name="title"
            value={notification.title}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Type:</label>
          <select
            name="type"
            value={notification.type}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="System Alert">System Alert</option>
            <option value="Security Alert">Security Alert</option>
            <option value="User Activity">User Activity</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Priority:</label>
          <select
            name="priority"
            value={notification.priority}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Message:</label>
          <textarea
            name="message"
            value={notification.message}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
            rows="3"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Notification
        </button>
      </form>
    </div>
  );
};

export default AdminNotificationForm;