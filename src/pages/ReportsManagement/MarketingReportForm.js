// MarketingReportForm.js
import React, { useState } from 'react';

const MarketingReportForm = ({ generateNewMarketingReport }) => {
  const [reportParams, setReportParams] = useState({
    reportType: 'Open Rate',
    dateRange: '',
  });

  const handleInputChange = (e) => {
    setReportParams({ ...reportParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateNewMarketingReport(reportParams);
  };

  return (
    <div className="marketing-report-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generate Marketing Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Report Type:</label>
          <select
            name="reportType"
            value={reportParams.reportType}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Open Rate">Open Rate</option>
            <option value="Click-Through Rate">Click-Through Rate</option>
            <option value="Conversions">Conversions</option>
            <option value="Revenue">Revenue</option>
          </select>
        </div>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate Report
        </button>
      </form>
    </div>
  );
};

export default MarketingReportForm;