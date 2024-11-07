// EmailReminders.js
import React, { useState } from 'react';

const EmailReminders = () => {
  const [reminderEmail, setReminderEmail] = useState('');
  const [task, setTask] = useState('');

  const handleSendReminder = () => {
    console.log('Reminder Sent:', { task, reminderEmail });
  };

  return (
    <div className="email-reminders bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Send Email Reminders</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Recipient Email"
          value={reminderEmail}
          onChange={(e) => setReminderEmail(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      <button onClick={handleSendReminder} className="bg-blue-500 text-white p-2 rounded-md">
        Send Reminder
      </button>
    </div>
  );
};

export default EmailReminders;