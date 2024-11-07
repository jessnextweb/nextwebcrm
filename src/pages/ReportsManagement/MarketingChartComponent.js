// MarketingChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const MarketingChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: 'Open Rate (%)',
        data: data.map((entry) => entry.openRate),
        fill: false,
        borderColor: 'blue',
      },
      {
        label: 'Click-Through Rate (%)',
        data: data.map((entry) => entry.ctr),
        fill: false,
        borderColor: 'green',
      },
      {
        label: 'Revenue ($)',
        data: data.map((entry) => entry.revenue),
        fill: false,
        borderColor: 'orange',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Percentage/Revenue' } },
    },
  };

  return (
    <div className="chart bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Marketing Performance</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MarketingChartComponent;