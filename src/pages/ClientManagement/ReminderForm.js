// ReminderForm.js
import React, { useState } from 'react';
import { createReminder } from '../../services/reminderService.js';
import AlertsPanel from './AlertsPanel';
import '../../styles.css'

const ReminderForm = () => {
  const [reminder, setReminder] = useState({
    title: '',
    dueDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    setReminder({ ...reminder, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (reminder.title && reminder.dueDate) {
      await createReminder(reminder);
      alert('Reminder set successfully!');
      setReminder({ title: '', dueDate: '', notes: '' });
    } else {
      alert('Please fill in the title and due date.');
    }
  };

  return (
    <div className="reminder-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Set a Reminder</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Reminder Title:</label>
          <input
            type="text"
            name="title"
            value={reminder.title}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Due Date:</label>
          <input
            type="datetime-local"
            name="dueDate"
            value={reminder.dueDate}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Notes:</label>
          <textarea
            name="notes"
            value={reminder.notes}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
            rows="3"
            placeholder="Additional notes (optional)"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Set Reminder
        </button>
      </form>
      
      < AlertsPanel />
    </div>
  );
};

export default ReminderForm;