// SalesChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: 'Revenue Growth',
        data: data.map((entry) => entry.revenue),
        fill: false,
        borderColor: 'blue',
      },
      {
        label: 'Conversion Rate (%)',
        data: data.map((entry) => entry.conversionRate),
        fill: false,
        borderColor: 'green',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Amount (%) / Revenue' } },
    },
  };

  return (
    <div className="chart bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Sales Performance</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SalesChartComponent;