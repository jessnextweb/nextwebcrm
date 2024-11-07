import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  // Log the incoming data
  console.log("Data received by ChartComponent:", data);

  // Check if data is valid
  if (!Array.isArray(data)) {
    console.error("Expected data to be an array, but received:", data);
    return <p>Error: Data is not in the expected format.</p>;
  }

  if (data.length === 0) {
    console.warn("No data available to display the chart.");
    return <p>No data available</p>;
  }

  // Prepare the chart data
  const chartData = {
    labels: data.map((entry) => {
      if (!entry.date) {
        console.error("Missing date in entry:", entry);
        return ''; 
      }
      return entry.date;
    }),
    datasets: [
      {
        label: 'Revenue',
        data: data.map((entry) => {
          if (typeof entry.revenue !== 'number') {
            console.error("Invalid revenue value in entry:", entry);
            return 0; // Return 0 for invalid revenue
          }
          return entry.revenue;
        }),
        fill: false,
        borderColor: 'blue',
      },
      {
        label: 'Expenses',
        data: data.map((entry) => {
          if (typeof entry.expenses !== 'number') {
            console.error("Invalid expenses value in entry:", entry);
            return 0; // Return 0 for invalid expenses
          }
          return entry.expenses;
        }),
        fill: false,
        borderColor: 'red',
      },
    ],
  };

  // Log the chart data before rendering
  console.log("Chart Data:", chartData);

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Amount ($)' } },
    },
  };

  return (
    <div className="chart bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Revenue vs Expenses</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
