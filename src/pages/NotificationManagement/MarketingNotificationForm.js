// MarketingNotificationForm.js
import React, { useState } from 'react';

const MarketingNotificationForm = ({ createNewNotification }) => {
  const [notification, setNotification] = useState({
    name: '',
    type: 'Campaign Update',
    triggerTime: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setNotification({ ...notification, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewNotification(notification);
    setNotification({ name: '', type: 'Campaign Update', triggerTime: '', description: '' });
  };

  return (
    <div className="marketing-notification-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Create New Marketing Notification</h2>
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
            <option value="Campaign Update">Campaign Update</option>
            <option value="Engagement Alert">Engagement Alert</option>
            <option value="Critical Campaign Alert">Critical Campaign Alert</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Trigger Time:</label>
          <input
            type="datetime-local"
            name="triggerTime"
            value={notification.triggerTime}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Description:</label>
          <textarea
            name="description"
            value={notification.description}
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

export default MarketingNotificationForm;