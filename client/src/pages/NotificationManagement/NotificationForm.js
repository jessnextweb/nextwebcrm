// NotificationForm.js
import React, { useState } from 'react';

const NotificationForm = ({ createNewNotification }) => {
  const [notification, setNotification] = useState({
    name: '',
    type: 'Task Reminder',
    frequency: 'Once',
    dueDate: '',
  });

  const handleInputChange = (e) => {
    setNotification({ ...notification, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewNotification(notification);
    setNotification({ name: '', type: 'Task Reminder', frequency: 'Once', dueDate: '' });
  };

  return (
    <div className="notification-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Create New Notification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Notification Name:</label>
          <input
            type="text"
            name="name"
            value={notification.name}
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
            <option value="Task Reminder">Task Reminder</option>
            <option value="Project Update">Project Update</option>
            <option value="Deadline Alert">Deadline Alert</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Frequency:</label>
          <select
            name="frequency"
            value={notification.frequency}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Once">Once</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={notification.dueDate}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
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

export default NotificationForm;