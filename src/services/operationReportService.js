// operationReportService.js
export const generateOperationReport = async (reportParams) => {
    const response = await fetch('/api/generate-operation-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportParams),
    });
    return response.json();
  };
  
  export const fetchOperationReports = async () => {
    const response = await fetch('/api/operation-reports');
    return response.json();
  };
  
  export const exportOperationReport = async (reportId, format) => {
    const response = await fetch(`/api/export-operation-report/${reportId}?format=${format}`, {
      method: 'GET',
    });
    return response.blob(); // PDF or CSV
  };