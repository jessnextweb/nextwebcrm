import React, { useState, useEffect } from 'react';
import { fetchSchedules } from '../../services/scheduleService'; // Assume this fetches schedules with AI logic
// import Sidebar from './Sidebaremp';
// import Header from '../../components/Header';



const WorkScheduleTable = () => {
  const [schedules, setSchedules] = useState([]);
  const [reminderTime, setReminderTime] = useState(1); // Default: 1 hour before the shift
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch AI-powered schedules based on employee data
    fetchSchedules().then((data) => setSchedules(data));
    
    // Periodic check to simulate real-time behavior (polling every 60 seconds)
    const interval = setInterval(() => {
      fetchSchedules().then((data) => {
        setSchedules(data);
        checkForScheduleUpdates(data); // Check for updated shifts
      });
    }, 60000); // 60 seconds interval

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Check for schedule updates to notify the user
  const checkForScheduleUpdates = (newSchedules) => {
    const updatedSchedules = newSchedules.filter(
      (newShift) => !schedules.some((shift) => shift.id === newShift.id)
    );
    if (updatedSchedules.length > 0) {
      updatedSchedules.forEach((shift) => {
        setNotifications((prev) => [
          ...prev,
          `New Shift added: ${shift.date} at ${shift.location}`,
        ]);
      });
    }
  };

  // Handle reminder change by user
  const handleReminderChange = (e) => {
    setReminderTime(e.target.value);
    // Backend logic to store the user's reminder preference can be added here
  };

  // Check if employees have missed any shifts
  const checkForMissedShifts = () => {
    schedules.forEach((shift) => {
      const currentTime = new Date();
      const shiftEndTime = new Date(`${shift.date} ${shift.endTime}`);
      if (currentTime > shiftEndTime && !shift.confirmed) {
        alert(`Missed shift detected: ${shift.location} on ${shift.date}`);
      }
    });
  };

  return (
    // <div className="flex">
    // <Sidebar />
    // <div className="flex-1">
    //   <Header adminName="Admin" />
    <div className="work-schedule-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Work Schedules</h2>

      {/* Customizable Reminder Option */}
      <div className="reminder-settings mb-4">
        <label className="mr-2">Shift Reminder:</label>
        <select value={reminderTime} onChange={handleReminderChange}>
          <option value={1}>1 hour before</option>
          <option value={2}>2 hours before</option>
          <option value={4}>4 hours before</option>
        </select>
      </div>

      {/* Display notifications (e.g., new shifts) */}
      {notifications.length > 0 && (
        <div className="notifications mb-4">
          <h3 className="text-md font-semibold">Notifications:</h3>
          <ul>
            {notifications.map((note, index) => (
              <li key={index} className="text-sm text-green-600">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Shift Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Location</th>
            <th>Attendance Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((shift) => (
            <tr key={shift.id}>
              <td>{shift.date}</td>
              <td>{shift.startTime}</td>
              <td>{shift.endTime}</td>
              <td>{shift.location}</td>
              <td>{shift.confirmed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Escalation Trigger for Missed Shifts */}
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={checkForMissedShifts}
      >
        Check for Missed Shifts
      </button>
    </div>
    
  );
};

export default WorkScheduleTable;
