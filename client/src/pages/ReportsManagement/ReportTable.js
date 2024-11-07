// ReportTable.js
import React from 'react';
import ReportExportButton from './ReportExportButton';

const ReportTable = ({ reports }) => {
  return (
    <div className="report-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generated Reports</h2>
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
                <ReportExportButton reportId={report.id} format="PDF" />
                <ReportExportButton reportId={report.id} format="CSV" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;