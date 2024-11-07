import React from 'react';
import { exportReport } from '../../services/reportService';

const ReportExportButton = ({ reportId, format }) => {
  const handleExport = async () => {
    try {
      const reportData = await exportReport(reportId, format);
      const url = URL.createObjectURL(reportData); 
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `report.${format.toLowerCase()}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <button onClick={handleExport} className="bg-green-500 text-white px-4 py-2 rounded mx-2">
      Export as {format}
    </button>
  );
};

export default ReportExportButton;
