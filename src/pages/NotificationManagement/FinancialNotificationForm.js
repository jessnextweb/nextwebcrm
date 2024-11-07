// FinancialNotificationForm.js
import React, { useState } from 'react';

const FinancialNotificationForm = ({ createNewNotification }) => {
  const [notification, setNotification] = useState({
    name: '',
    type: 'Payment Reminder',
    dueDate: '',
    amount: 0,
  });

  const handleInputChange = (e) => {
    setNotification({ ...notification, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewNotification(notification);
    setNotification({ name: '', type: 'Payment Reminder', dueDate: '', amount: 0 });
  };

  return (
    <div className="financial-notification-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Create New Financial Notification</h2>
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
            <option value="Payment Reminder">Payment Reminder</option>
            <option value="Overdue Payment">Overdue Payment</option>
            <option value="Financial Alert">Financial Alert</option>
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
        <div className="mb-4">
          <label>Amount ($):</label>
          <input
            type="number"
            name="amount"
            value={notification.amount}
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

export default FinancialNotificationForm;