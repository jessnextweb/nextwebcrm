// AnalyticsCharts.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchChartData } from '../../services/analyticsService';

const AnalyticsCharts = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchChartData().then((data) => {
      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: 'Avg Response Time (mins)',
            data: data.avgResponseTime,
            borderColor: 'blue',
          },
          {
            label: 'Resolution Rate (%)',
            data: data.resolutionRate,
            borderColor: 'green',
          },
          {
            label: 'CSAT Score (%)',
            data: data.csatScore,
            borderColor: 'orange',
          },
        ],
      });
    });
  }, []);

  return (
    <div className="analytics-charts bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Performance Analytics</h2>
      <Line data={chartData} />
    </div>
  );
};

export default AnalyticsCharts;