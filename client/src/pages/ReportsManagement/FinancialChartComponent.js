// FinancialChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const FinancialChartComponent = ({ data }) => {
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
        label: 'Profit & Loss',
        data: data.map((entry) => entry.profit),
        fill: false,
        borderColor: 'green',
      },
      {
        label: 'Cash Flow',
        data: data.map((entry) => entry.cashFlow),
        fill: false,
        borderColor: 'orange',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Amount ($)' } },
    },
  };

  return (
    <div className="chart bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Financial Performance</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default FinancialChartComponent;