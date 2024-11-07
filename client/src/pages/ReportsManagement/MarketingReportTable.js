// MarketingReportTable.js
import React from 'react';
import MarketingReportExportButton from './MarketingReportExportButton';

const MarketingReportTable = ({ reports }) => {
  return (
    <div className="marketing-report-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generated Marketing Reports</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Date Generated</th>
            <th>Report Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.name}</td>
              <td>{report.dateGenerated}</td>
              <td>{report.type}</td>
              <td>
                <MarketingReportExportButton reportId={report.id} format="PDF" />
                <MarketingReportExportButton reportId={report.id} format="CSV" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketingReportTable;