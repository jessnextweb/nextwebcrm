import React, { useEffect, useState } from 'react';

const RealTimeStatus = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    // Fetch initial statuses (if API available)
    fetch('https://retoolapi.dev/mCbZd6/data') // example endpoint
      .then((response) => response.json())
      .then((data) => setStatuses(data))
      .catch((error) => console.error("Failed to fetch initial data:", error));

    // Set up WebSocket for real-time updates
    const socket = new WebSocket('ws://localhost:4000/status');

    socket.onopen = () => console.log('WebSocket connected');
    socket.onmessage = (event) => {
      const updatedStatus = JSON.parse(event.data);
      setStatuses((prevStatuses) => {
        const index = prevStatuses.findIndex((status) => status.id === updatedStatus.id);
        if (index >= 0) {
          // Update existing status
          return prevStatuses.map((status) => 
            status.id === updatedStatus.id ? updatedStatus : status
          );
        } else {
          // Add new status if it doesn't exist
          return [...prevStatuses, updatedStatus];
        }
      });
    };

    socket.onerror = (error) => console.error("WebSocket error:", error);

    return () => socket.close();
  }, []);

  return (
    <div className="real-time-status bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Real-Time Ticket Status</h2>
      <ul>
        {statuses.map((status) => (
          <li key={status.id}>
            <strong>Ticket {status.id}:</strong> {status.currentStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeStatus;
