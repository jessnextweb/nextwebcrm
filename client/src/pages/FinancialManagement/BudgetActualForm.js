// BudgetActualForm.js
import React, { useState } from 'react';

const BudgetActualForm = ({ setBudgetData }) => {
  const [formDetails, setFormDetails] = useState({
    budgetAmount: '',
    actualSpending: '',
    category: 'Marketing',
    dateRange: '',
  });

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://retoolapi.dev/6oG7yH/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDetails),
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data, "data");
        
        // Ensure data is an array, wrap in an array if it isn't
        setBudgetData(Array.isArray(data) ? data : [data]);
    } catch (error) {
        console.error('Error fetching budget data:', error);
    }
};

  return (
    <div className="budget-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Budget vs Actual Analysis</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Budget Amount:</label>
          <input
            type="number"
            name="budgetAmount"
            value={formDetails.budgetAmount}
            onChange={handleChange}
            placeholder="Enter Budget Amount"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Actual Spending:</label>
          <input
            type="number"
            name="actualSpending"
            value={formDetails.actualSpending}
            onChange={handleChange}
            placeholder="Enter Actual Spending"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Category:</label>
          <select
            name="category"
            value={formDetails.category}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
            <option value="Salaries">Salaries</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Date Range:</label>
          <input
            type="text"
            name="dateRange"
            value={formDetails.dateRange}
            onChange={handleChange}
            placeholder="YYYY-MM-DD to YYYY-MM-DD"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BudgetActualForm;