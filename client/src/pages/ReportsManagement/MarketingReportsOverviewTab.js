// MarketingReportsOverviewTab.js
import React, { useState, useEffect } from 'react';
import MarketingReportForm from './MarketingReportForm';
import MarketingChartComponent from './MarketingChartComponent';
import MarketingReportTable from './MarketingReportTable';
import { generateMarketingReport, fetchMarketingReports } from '../../services/marketingReportService';

const MarketingReportsOverviewTab = () => {
  const [reports, setReports] = useState([]);
  const [chartData, setChartData] = useState([]);

  const generateNewMarketingReport = async (reportParams) => {
    const newReport = await generateMarketingReport(reportParams);
    setReports([...reports, newReport]);
    // Fetch new data to be displayed in chart
    setChartData(newReport.data);
  };

  useEffect(() => {
    const getReports = async () => {
      const data = await fetchMarketingReports();
      setReports(data);
    };

    getReports();
  }, []);

  return (
    <div className="marketing-reports-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Marketing Reports Overview</h2>
      <MarketingReportForm generateNewMarketingReport={generateNewMarketingReport} />
      <MarketingChartComponent data={chartData} />
      <MarketingReportTable reports={reports} />
    </div>
  );
};

export default MarketingReportsOverviewTab; 