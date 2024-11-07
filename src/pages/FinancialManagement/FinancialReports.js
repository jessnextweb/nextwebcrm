// FinancialReports.js
import React, { useState } from 'react';
import ReportForm from './ReportForm';
import ReportChart from './ReportChart';
import { exportReport } from '../../services/reportService';

const FinancialReports = () => {
  const [reportData, setReportData] = useState(null);

  const handleExport = async (format) => {
    const reportURL = await exportReport(format);
    const link = document.createElement('a');
    link.href = reportURL;
    link.setAttribute('download', `financial_report.${format}`);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="financial-reports bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Financial Reports</h2>
      <ReportForm setReportData={setReportData} />
      {reportData && <ReportChart reportData={reportData} />}
      {reportData && (
        <div className="export-buttons mt-4">
          <button
            onClick={() => handleExport('pdf')}
            className="bg-green-500 text-white px-4 py-2 mr-4 rounded"
          >
            Export as PDF
          </button>
          <button
            onClick={() => handleExport('csv')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Export as CSV
          </button>
        </div>
      )}
    </div>
  );
};

export default FinancialReports;