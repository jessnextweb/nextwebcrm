import React, { useState, useEffect } from 'react';
import { fetchActivityLogs } from '../../services/activityLogService'; // Import the service

const ActivityLog = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActivityLogs()
      .then((data) => {
        setLogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch activity logs');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading activity logs...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
      <ul>
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <li key={index} className="mb-2">
              {log.date}: {log.activity}
            </li>
          ))
        ) : (
          <li>No activity logs available</li>
        )}
      </ul>
    </div>
  );
};

export default ActivityLog;
