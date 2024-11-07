// FinancialReportsOverviewTab.js
import React, { useState, useEffect } from 'react';
import FinancialReportForm from './FinancialReportForm';
import FinancialChartComponent from './FinancialChartComponent';
import FinancialReportTable from './FinancialReportTable';
import { generateFinancialReport, fetchFinancialReports } from '../../services/financialReportService';

const FinancialReportsOverviewTab = () => {
  const [reports, setReports] = useState([]);
  const [chartData, setChartData] = useState([]);

  const generateNewFinancialReport = async (reportParams) => {
    const newReport = await generateFinancialReport(reportParams);
    setReports([...reports, newReport]);
    // Fetch new data to be displayed in chart
    setChartData(newReport.data);
  };

  useEffect(() => {
    const getReports = async () => {
      const data = await fetchFinancialReports();
      setReports(data);
    };

    getReports();
  }, []);

  return (
    <div className="financial-reports-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Financial Reports Overview</h2>
      <FinancialReportForm generateNewFinancialReport={generateNewFinancialReport} />
      <FinancialChartComponent data={chartData} />
      <FinancialReportTable reports={reports} />
    </div>
  );
};

export default FinancialReportsOverviewTab;