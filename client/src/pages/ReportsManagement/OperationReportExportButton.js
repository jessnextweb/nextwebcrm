// OperationReportExportButton.js
import React from 'react';
import { exportOperationReport } from '../../services/operationReportService';

const OperationReportExportButton = ({ reportId, format }) => {
  const handleExport = async () => {
    const reportData = await exportOperationReport(reportId, format);
    const url = URL.createObjectURL(reportData);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `operation-report.${format.toLowerCase()}`);
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

export default OperationReportExportButton;