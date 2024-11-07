// FinancialReportTable.js
import React from 'react';
import FinancialReportExportButton from './FinancialReportExportButton';

const FinancialReportTable = ({ reports }) => {
  return (
    <div className="financial-report-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generated Financial Reports</h2>
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
                <FinancialReportExportButton reportId={report.id} format="PDF" />
                <FinancialReportExportButton reportId={report.id} format="CSV" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialReportTable;