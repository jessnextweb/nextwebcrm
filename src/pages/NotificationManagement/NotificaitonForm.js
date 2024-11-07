// NotificationForm.js
import React, { useState } from 'react';

const NotificationForm = ({ onAddNotification }) => {
  const [notificationType, setNotificationType] = useState('Task Reminder');
  const [priorityLevel, setPriorityLevel] = useState('Medium');
  const [userRole, setUserRole] = useState('Admin');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNotification({
      notificationType,
      priorityLevel,
      userRole,
      dateRange: { startDate, endDate },
    });
    // Reset form fields
    setNotificationType('Task Reminder');
    setPriorityLevel('Medium');
    setUserRole('Admin');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="notification-form bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create Notification</h2>
      <div className="mb-4">
        <label className="block mb-2">Notification Type:</label>
        <select value={notificationType} onChange={(e) => setNotificationType(e.target.value)} className="border p-2 rounded-md w-full">
          <option value="Task Reminder">Task Reminder</option>
          <option value="Payment Alert">Payment Alert</option>
          <option value="Campaign Update">Campaign Update</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Priority Level:</label>
        <select value={priorityLevel} onChange={(e) => setPriorityLevel(e.target.value)} className="border p-2 rounded-md w-full">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">User Role:</label>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)} className="border p-2 rounded-md w-full">
          <option value="Admin">Admin</option>
          <option value="Sales Rep">Sales Rep</option>
          <option value="Marketing Manager">Marketing Manager</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Date Range:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 rounded-md w-full" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2 rounded-md w-full mt-2" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Add Notification</button>
    </form>
  );
};

export default NotificationForm;
