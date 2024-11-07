// KPIsWidget.js
import React from 'react';

const KPIsWidget = ({ kpis }) => {
  return (
    <div className="kpis-widget bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Performance KPIs</h2>
      <ul>
        <li>
          <strong>Total Sales:</strong> ${kpis.totalSales}
        </li>
        <li>
          <strong>Deals Closed:</strong> {kpis.dealsClosed}
        </li>
        <li>
          <strong>Average Deal Size:</strong> ${kpis.averageDealSize}
        </li>
        <li>
          <strong>Lead Response Time:</strong> {kpis.leadResponseTime} minutes
        </li>
      </ul>
    </div>
  );
};

export default KPIsWidget;