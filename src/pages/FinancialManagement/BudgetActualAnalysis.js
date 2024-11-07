
// BudgetActualAnalysis.js
import React, { useState } from 'react';
import BudgetActualForm from './BudgetActualForm';
import BudgetComparisonChart from './BudgetComparisonChart';
import BudgetAlerts from './BudgetAlerts';
import ForecastingWidget from './ForecastingWidget';

const BudgetActualAnalysis = () => {
  const [budgetData, setBudgetData] = useState([]);

  return (
    <div className="budget-actual-analysis bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Budget vs Actual Analysis</h2>
      <BudgetActualForm setBudgetData={setBudgetData} />
      {budgetData.length > 0 && (
        <>
          <BudgetComparisonChart budgetData={budgetData} />
          <BudgetAlerts budgetData={budgetData} />
        </>
      )}
      <ForecastingWidget />
    </div>
  );
};

export default BudgetActualAnalysis;
