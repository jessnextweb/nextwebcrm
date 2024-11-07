// MarketingAnalyticsForm.js
import React, { useState } from 'react';

const MarketingAnalyticsForm = ({ generateAnalyticsReport }) => {
  // Set initial state for form parameters
  const [reportParams, setReportParams] = useState({
    dateRange: '',
    metric: 'Open Rate',
  });

  // Handle input change to update form state
  const handleInputChange = (e) => {
    setReportParams({ ...reportParams, [e.target.name]: e.target.value });
  };

  // Handle form submission and call the generateAnalyticsReport prop
  const handleSubmit = (e) => {
    e.preventDefault();
    generateAnalyticsReport(reportParams); // Calls the parent function
  };

  return (
    <div className="analytics-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generate Marketing Analytics</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Date Range:</label>
          <input
            type="date"
            name="dateRange"
            value={reportParams.dateRange}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Metric Type:</label>
          <select
            name="metric"
            value={reportParams.metric}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Open Rate">Open Rate</option>
            <option value="Click-Through Rate">Click-Through Rate</option>
            <option value="Revenue">Revenue</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate Report
        </button>
      </form>
    </div>
  );
};

export default MarketingAnalyticsForm;
