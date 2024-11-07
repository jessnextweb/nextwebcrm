// ReportsOverviewTab.js
import React, { useState, useEffect } from 'react';
import ReportGenerationForm from './ReportGenerationForm';
import ReportTable from './ReportTable';
import ChartComponent from './ChartComponent';
import { generateReport, fetchReports } from '../../services/reportService';

const ReportsOverviewTab = () => {
  const [reports, setReports] = useState([]);
  const [chartData, setChartData] = useState([]);

  const generateNewReport = async (reportParams) => {
    const newReport = await generateReport(reportParams);
    setReports([...reports, newReport]);
    
    setChartData(newReport.data);
  };

  useEffect(() => {
    const getReports = async () => {
      const data = await fetchReports();
      setReports(data);
    };

    getReports();
  }, []);

  return (
    <div className="reports-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Reports Overview</h2>
      <ReportGenerationForm generateNewReport={generateNewReport} />
      <ChartComponent data={chartData} />
      <ReportTable reports={reports} />
    </div>
  );
};

export default ReportsOverviewTab;