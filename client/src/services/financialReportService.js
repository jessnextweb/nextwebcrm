// financialReportService.js
export const generateFinancialReport = async (reportParams) => {
    const response = await fetch('https://retoolapi.dev/UT9hEa/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportParams),
    });
    return response.json();
  };
  
  export const fetchFinancialReports = async () => {
    const response = await fetch('https://retoolapi.dev/UT9hEa/data');
    return response.json();
  };
  
  export const exportFinancialReport = async (reportId, format) => {
    const response = await fetch(`https://retoolapi.dev/UT9hEa/data`, {
      method: 'GET',
    });
    return response.blob(); // PDF or CSV
  };