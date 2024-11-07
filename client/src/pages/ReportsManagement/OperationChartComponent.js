// OperationChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const OperationChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: 'Tasks Completed',
        data: data.map((entry) => entry.tasksCompleted),
        fill: false,
        borderColor: 'blue',
      },
      {
        label: 'Project Progress (%)',
        data: data.map((entry) => entry.projectProgress),
        fill: false,
        borderColor: 'green',
      },
      {
        label: 'Resource Utilization (%)',
        data: data.map((entry) => entry.resourceUtilization),
        fill: false,
        borderColor: 'orange',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Percentage/Count' } },
    },
  };

  return (
    <div className="chart bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Operational Performance</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default OperationChartComponent;