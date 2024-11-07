// PerformanceAnalytics.js
import React from 'react';
import PerformanceMetrics from './PerformanceMetrics';
import CSATAnalytics from './CSATAnalytics';
import AnalyticsCharts from './AnalyticsCharts';

const PerformanceAnalytics = () => {
  return (
    <div className="performance-analytics bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Performance Analytics</h2>
      <PerformanceMetrics />
      <CSATAnalytics />
      <AnalyticsCharts />
    </div>
  );
};

export default PerformanceAnalytics;