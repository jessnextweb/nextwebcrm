// SalesReportForm.js
import React, { useState } from 'react';

const SalesReportForm = ({ generateNewSalesReport }) => {
  const [reportParams, setReportParams] = useState({
    reportType: 'Conversion Rate',
    dateRange: '',
  });

  const handleInputChange = (e) => {
    setReportParams({ ...reportParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateNewSalesReport(reportParams);
  };

  return (
    <div className="sales-report-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generate Sales Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Report Type:</label>
          <select
            name="reportType"
            value={reportParams.reportType}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Conversion Rate">Conversion Rate</option>
            <option value="Revenue Growth">Revenue Growth</option>
            <option value="Average Deal Size">Average Deal Size</option>
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

export default SalesReportForm;