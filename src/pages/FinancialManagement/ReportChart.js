// ReportChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const ReportChart = ({ reportData }) => {
  const chartData = {
    labels: reportData.map((data) => data.date),
    datasets: [
      {
        label: 'Revenue',
        data: reportData.map((data) => data.revenue),
        fill: false,
        borderColor: 'green',
      },
      {
        label: 'Expenses',
        data: reportData.map((data) => data.expenses),
        fill: false,
        borderColor: 'red',
      },
      {
        label: 'Profit',
        data: reportData.map((data) => data.profit),
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Amount' } },
    },
  };

  return (
    <div className="report-chart bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Financial Report Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ReportChart;