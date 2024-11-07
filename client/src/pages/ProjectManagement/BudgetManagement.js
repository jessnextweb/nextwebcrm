// BudgetManagement.js
import React, { useState, useEffect } from 'react';
import { fetchBudgetData } from '../../services/budgetService';
import ResourceAllocation from './ResourceAllocation';
import DeadlineNotifications from './DeadlineNotifications';


const BudgetManagement = () => {
  const [budget, setBudget] = useState(0);
  const [actualCost, setActualCost] = useState(0);

  useEffect(() => {
    fetchBudgetData().then((data) => {
      setBudget(data.budget);
      setActualCost(data.actualCost);
    });
  }, []);

  return (
    <div className='main max-w-4xl mx-auto p-6'>
      <div className="budget-management bg-white p-6 shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Budget Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="stat bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Total Budget</h3>
            <p className="text-xl font-semibold">${budget}</p>
          </div>
          <div className="stat bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Actual Cost</h3>
            <p className="text-xl font-semibold">${actualCost}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Budget vs Actual</h3>
          <p className={`text-xl font-semibold ${actualCost > budget ? 'text-red-600' : 'text-green-600'}`}>
            {actualCost > budget ? 'Over Budget' : 'Within Budget'}
          </p>
        </div>  
      </div>
      <div className='budget mt-6'> 
        <ResourceAllocation /> 
      </div>
      <div className='budget mt-6'> 
        <DeadlineNotifications /> 
      </div>
    </div>
  );
};

export default BudgetManagement;
