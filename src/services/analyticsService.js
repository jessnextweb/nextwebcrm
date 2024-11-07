// analyticsService.js
export const fetchMetrics = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your API endpoint
    return response.json();
  };


//   // analyticsService.js
// export const fetchMetrics = async () => {
//   // Simulated fetching of metrics data (replace with your API call)
//   return [
//     { name: 'Total Tickets', value: 150 },
//     { name: 'Resolved Tickets', value: 120 },
//     { name: 'Pending Tickets', value: 30 },
//   ];
// };

export const generateReport = async (filters) => {
  // Simulated report generation (replace with your API call)
  const { metric, startDate, endDate } = filters;
  
  // Sample data based on the filter (customize as needed)
  return [
    { date: '2024-01-01', value: Math.random() * 100 },
    { date: '2024-01-02', value: Math.random() * 100 },
    { date: '2024-01-03', value: Math.random() * 100 },
  ];
};

  // analyticsService.js
export const fetchPerformanceMetrics = async () => {
  const response = await fetch('/api/analytics/performance-metrics');
  return response.json();
};

export const fetchCSATAnalytics = async () => {
  const response = await fetch('/api/analytics/csat');
  return response.json();
};

export const fetchChartData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

//   // analyticsService.js
// export const generateReport = async (filters) => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'POST',
//       body: JSON.stringify(filters),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.json();
//     // Ensure it's an array before returning
//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.error('Error generating report:', error);
//     return [];
//   }
// };
