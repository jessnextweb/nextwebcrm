// BudgetAlerts.js
import React, { useEffect, useState } from 'react';

const BudgetAlerts = ({ budgetData }) => {
  const [alert, setAlert] = useState('');

  useEffect(() => {
    budgetData.forEach((data) => {
      if (data.actualSpending > data.budgetAmount) {
        setAlert(`Warning: Spending in ${data.category} exceeds the budget!`);
      }
    });
  }, [budgetData]);

  return (
    <div className="budget-alerts bg-red-500 text-white p-4 rounded-md">
      {alert && <p>{alert}</p>}
    </div>
  );
};

export default BudgetAlerts;