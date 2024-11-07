import React, { useState } from 'react';



const TimeTracker = ({ logTime }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleLogTime = () => {
    logTime(startTime, endTime);
  };

  return (
   
    <div className="p-4">
      <h2>Log Time</h2>
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        placeholder="Start Time"
        className="border p-2 rounded"
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        placeholder="End Time"
        className="border p-2 rounded"
      />
      <button onClick={handleLogTime} className="bg-blue-500 text-white p-2 rounded">
        Log Time
      </button>
    </div>
    
  );
};

export default TimeTracker;