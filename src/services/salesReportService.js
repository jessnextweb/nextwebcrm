// salesReportService.js
export const generateSalesReport = async (reportParams) => {
    const response = await fetch('/api/generate-sales-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportParams),
    });
    return response.json();
  };
  
  export const fetchSalesReports = async () => {
    const response = await fetch('https://retoolapi.dev/UT9hEa/data');
    return response.json();
  };
  
  export const exportSalesReport = async (reportId, format) => {
    const response = await fetch(`https://retoolapi.dev/UT9hEa/data`, {
      method: 'GET',
    });
    return response.blob(); // PDF or CSV
  };