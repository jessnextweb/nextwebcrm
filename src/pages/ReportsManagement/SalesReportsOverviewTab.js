// SalesReportsOverviewTab.js
import React, { useState, useEffect } from 'react';
import SalesReportForm from './salesReportForm';
import SalesChartComponent from './SalesChartComponent';
import SalesReportTable from './SalesReportTable';
import { generateSalesReport, fetchSalesReports } from '../../services/salesReportService';

const SalesReportsOverviewTab = () => {
  const [reports, setReports] = useState([]);
  const [chartData, setChartData] = useState([]);

  const generateNewSalesReport = async (reportParams) => {
    const newReport = await generateSalesReport(reportParams);
    setReports([...reports, newReport]);
    // Fetch new data to be displayed in chart
    setChartData(newReport.data);
  };

  useEffect(() => {
    const getReports = async () => {
      const data = await fetchSalesReports();
      setReports(data);
    };

    getReports();
  }, []);

  return (
    <div className="sales-reports-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Sales Reports Overview</h2>
      <SalesReportForm generateNewSalesReport={generateNewSalesReport} />
      <SalesChartComponent data={chartData} />
      <SalesReportTable reports={reports} />
    </div>
  );
};

export default SalesReportsOverviewTab;