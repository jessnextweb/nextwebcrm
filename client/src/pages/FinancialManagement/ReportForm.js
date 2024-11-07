// ReportForm.js
import React, { useState } from 'react';

const ReportForm = ({ setReportData }) => {
  const [reportDetails, setReportDetails] = useState({
    reportType: 'Profit & Loss',
    dateRange: '',
    frequency: 'Monthly',
  });

  const handleChange = (e) => {
    setReportDetails({ ...reportDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://retoolapi.dev/0j6kIl/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reportDetails),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const reportData = await response.json();
        console.log('Report Data:', reportData); // Log for debugging

        // Check if the reportData is an object and has the expected properties
        if (reportData && typeof reportData === 'object' && reportData.id) {
            setReportData([reportData]); // Wrap the object in an array
        } else {
            console.error('Received data is not valid:', reportData);
            setReportData([]); // Set to an empty array if data is not valid
        }
    } catch (error) {
        console.error('Error fetching report data:', error);
        setReportData([]); // Set to an empty array on error
    }
};

  return (
    <div className="report-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generate Financial Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Report Type:</label>
          <select
            name="reportType"
            value={reportDetails.reportType}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Profit & Loss">Profit & Loss</option>
            <option value="Cash Flow">Cash Flow</option>
            <option value="Balance Sheet">Balance Sheet</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Date Range:</label>
          <input
            type="text"
            name="dateRange"
            value={reportDetails.dateRange}
            onChange={handleChange}
            placeholder="YYYY-MM-DD to YYYY-MM-DD"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Report Frequency:</label>
          <select
            name="frequency"
            value={reportDetails.frequency}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annual">Annual</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
