// FinancialOverview.js
import React, { useState, useEffect } from 'react';
import { fetchFinancialOverview } from '../../services/financialService';

const FinancialOverview = () => {
  const [overview, setOverview] = useState({
    revenue: 0,
    expenses: 0,
    profitLoss: 0,
    cashFlow: 0,
  });

  useEffect(() => {
    fetchFinancialOverview().then((data) => setOverview(data));
  }, []);

  return (
    <div className="financial-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Financial Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="stat">
          <h3>Total Revenue</h3>
          <p>${overview.revenue}</p>
        </div>
        <div className="stat">
          <h3>Total Expenses</h3>
          <p>${overview.expenses}</p>
        </div>
        <div className="stat">
          <h3>Profit & Loss</h3>
          <p>${overview.profitLoss}</p>
        </div>
        <div className="stat">
          <h3>Cash Flow</h3>
          <p>${overview.cashFlow}</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;