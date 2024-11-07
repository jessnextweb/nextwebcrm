// ReportForm.js
import React, { useState } from 'react';
import { generateReport } from '../../services/analyticsService';

const ReportForm = ({ setReportData }) => {
  const [filters, setFilters] = useState({
    metric: 'NPS',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await generateReport(filters);
    setReportData(data);
  };

  return (
    <div className="report-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Generate Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Select Metric:</label>
          <select
            name="metric"
            value={filters.metric}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="NPS">Net Promoter Score (NPS)</option>
            <option value="Churn Rate">Churn Rate</option>
            <option value="Purchase Behavior">Purchase Behavior</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;