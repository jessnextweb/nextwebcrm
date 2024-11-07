// reportService.js
export const generateReport = async (reportDetails) => {
  const response = await fetch('https://retoolapi.dev/YoAZ8M/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reportDetails),
  });
  return response.json();
};

// export const exportReport = async (format) => {
//   const response = await fetch(`https://retoolapi.dev/DsC856/data`);
//   const blob = await response.blob();
//   return URL.createObjectURL(blob);
// };

// services/reportService.js
export const exportReport = async (reportId, format) => {
  const response = await fetch(`https://retoolapi.dev/DsC856/data`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.blob(); // Ensure it returns a Blob
};


export const fetchReports = async () => {
  const response = await fetch('https://retoolapi.dev/DsC856/data');
  return response.json();
};


// Additional code for generating a report with projectId and reportType
export const generateReportWithDetails = async (projectId, reportType) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId,
        reportType,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate report');
    }

    const data = await response.json();
    return data; // Return the report data
  } catch (error) {
    console.error('Error generating report:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
