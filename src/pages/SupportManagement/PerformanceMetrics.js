// PerformanceMetrics.js
import React, { useEffect, useState } from 'react';
import { fetchPerformanceMetrics } from '../../services/analyticsService';

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    avgResponseTime: 0,
    resolutionRate: 0,
    ticketsHandled: 0,
  });

  useEffect(() => {
    fetchPerformanceMetrics().then((data) => setMetrics(data));
  }, []);

  return (
    <div className="performance-metrics bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Key Performance Metrics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="stat">
          <h3>Avg Response Time</h3>
          <p>{metrics.avgResponseTime} mins</p>
        </div>
        <div className="stat">
          <h3>Resolution Rate</h3>
          <p>{metrics.resolutionRate}%</p>
        </div>
        <div className="stat">
          <h3>Tickets Handled</h3>
          <p>{metrics.ticketsHandled}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;