// MarketingAnalyticsTable.js
import React from 'react';

const MarketingAnalyticsTable = ({ reports }) => {
  return (
    <div className="analytics-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Campaign Analytics Report</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Date</th>
            <th>Campaign Name</th>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.date}</td>
              <td>{report.campaignName}</td>
              <td>{report.metric}</td>
              <td>{report.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketingAnalyticsTable;