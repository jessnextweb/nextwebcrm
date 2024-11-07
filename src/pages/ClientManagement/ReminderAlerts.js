// ReminderAlerts.js
import React from 'react';

const ReminderAlerts = ({ reminders }) => (
  <div className="bg-white p-4 shadow-md rounded-md">
    <h2 className="text-lg font-semibold mb-4">Reminders</h2>
    <ul>
      {reminders.map((reminder, index) => (
        <li key={index}>{reminder.message} - Due: {reminder.due}</li>
      ))}
    </ul>
  </div>
);

export default ReminderAlerts;
