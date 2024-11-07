// SalesReportExportButton.js
import React from 'react';
import { exportSalesReport } from '../../services/salesReportService';

const SalesReportExportButton = ({ reportId, format }) => {
  const handleExport = async () => {
    const reportData = await exportSalesReport(reportId, format);
    const url = URL.createObjectURL(reportData);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `sales-report.${format.toLowerCase()}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button onClick={handleExport} className="bg-green-500 text-white px-4 py-2 rounded mx-2">
      Export as {format}
    </button>
  );
};

export default SalesReportExportButton;