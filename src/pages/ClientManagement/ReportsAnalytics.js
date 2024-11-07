// ReportsAnalytics.js
import React, { useEffect, useState } from 'react';
import { fetchMetrics, generateReport } from '../../services/analyticsService'; // Import generateReport function
import ReportForm from './ReportForm';
import { Line } from 'react-chartjs-2';

const ReportsAnalytics = () => {
  const [metrics, setMetrics] = useState([]);
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchMetrics().then(data => setMetrics(data));
  }, []);

  // Chart data based on reportData
  const chartData = {
    labels: reportData.map(item => item.date), // Ensure reportData has 'date'
    datasets: [
      {
        label: 'Metric Value',
        data: reportData.map(item => item.value), // Ensure reportData has 'value'
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  const exportCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      reportData.map(row => Object.values(row).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'report.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="reports-analytics bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Reports & Analytics</h2>
      <div className="grid grid-cols-2 gap-6">
        <ReportForm setReportData={setReportData} />
        <div>
          <h3 className="font-medium mb-4">Metrics Overview</h3>
          <ul className="list-disc pl-5">
            {metrics.map((metric, index) => (
              <li key={index}>
                <strong>{metric.name}</strong>: {metric.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {reportData.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium mb-4">Report Chart</h3>
          <Line data={chartData} />
          <button onClick={exportCSV} className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
            Export as CSV
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportsAnalytics;
