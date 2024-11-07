// BudgetComparisonChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BudgetComparisonChart = ({ budgetData }) => {
  const chartData = {
    labels: budgetData.map((data) => data.category),
    datasets: [
      {
        label: 'Budget Amount',
        data: budgetData.map((data) => data.budgetAmount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Actual Spending',
        data: budgetData.map((data) => data.actualSpending),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="budget-chart bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Budget vs Actual Comparison</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BudgetComparisonChart;