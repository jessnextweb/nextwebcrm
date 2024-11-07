// MarketingAnalyticsOverviewTab.js
import React, { useState, useEffect } from 'react';
import MarketingAnalyticsForm from './MarketingAnalyticsForm';
import MarketingAnalyticsChart from './MarketingAnalyticsChart';
import MarketingAnalyticsTable from './MarketingAnalyticsTable';
import { fetchMarketingAnalytics } from '../../services/marketingAnalyticsService';

const MarketingAnalyticsOverview = () => {
  const [reports, setReports] = useState([]);
  const [chartData, setChartData] = useState([]);

  // const generateAnalyticsReport = async (params) => {
  //   console.log("exce param",params);
  //   const reportData = await fetchMarketingAnalytics(params);
  //   console.log("hey hi", reportData)
  //   setReports(reportData);
  //   setChartData(reportData);
  // };


  const generateAnalyticsReport = async (params) => {
    const reportData = await fetchMarketingAnalytics(params); // Assume this function is defined elsewhere
    console.log("Fetched report data:", reportData);

    if (!Array.isArray(reportData)) {
      console.warn("Expected reportData to be an array. Converting it to an array.");
      setReports([reportData]);
      setChartData([reportData]);
    } else {
      setReports(reportData);
      setChartData(reportData);
    }
  };


  return (
    <div className="marketing-analytics-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Marketing Analytics Overview</h2>
      <MarketingAnalyticsForm generateAnalyticsReport={generateAnalyticsReport} />
      <MarketingAnalyticsChart data={chartData} />
      <MarketingAnalyticsTable reports={reports} />
    </div>
  );
};

export default MarketingAnalyticsOverview;