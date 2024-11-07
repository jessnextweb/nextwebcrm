// SalesReportTable.js
import React from 'react';
import SalesReportExportButton from './SalesReportExportButton';

const SalesReportTable = ({ reports }) => {
  return (
    <div className="sales-report-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generated Sales Reports</h2>
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
                <SalesReportExportButton reportId={report.id} format="PDF" />
                <SalesReportExportButton reportId={report.id} format="CSV" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReportTable;