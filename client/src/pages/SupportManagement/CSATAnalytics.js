// CSATAnalytics.js
import React, { useEffect, useState } from 'react';
import { fetchCSATAnalytics } from '../../services/analyticsService';

const CSATAnalytics = () => {
  const [csat, setCSAT] = useState({
    score: 0,
    trends: [],
  });

  useEffect(() => {
    fetchCSATAnalytics().then((data) => setCSAT(data));
  }, []);

  return (
    <div className="csat-analytics bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Customer Satisfaction (CSAT)</h2>
      <div className="stat mb-4">
        <h3>CSAT Score</h3>
        <p>{csat.score}%</p>
      </div>
      <div className="trends">
        <h3>CSAT Trends</h3>
        <ul>
          {csat.trends.map((trend, index) => (
            <li key={index} className="mb-2">
              {trend.date}: {trend.score}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CSATAnalytics;