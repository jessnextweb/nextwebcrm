// SalesOverview.js

import React, { useState, useEffect } from 'react';
import { fetchSalesOverviewData } from '../../services/salesService';

import SalesPipelineWidget from './SalesPipelineWidget';
import LeadConversionWidget from './LeadConversionWidget';
import RevenueForecastWidget from './RevenueForecastWidget';
import ActivityFeed from './ActivityFeed';
import KPIsWidget from './KPIsWidget';
import Notifications from './Notifications';
import Sidebarsal from './Sidebarsal';
import Header from '../../components/Header';
// import "../../styles.css";


const SalesOverview = () => {
  const [salesData, setSalesData] = useState({
    totalSales: 0,
    leadConversionRate: 0,
    pipeline: [],
    recentActivity: [],
    performanceKPIs: {},
    revenueForecast: {}, // Add forecast data to the state if needed
  });

  useEffect(() => {
    // Fetch the initial sales data
    fetchSalesOverviewData().then((data) => setSalesData(data));
  }, []);

  return (
   
    <div className="sales-overview bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6">Sales Dashboard Overview</h1>
      <div className="grid grid-cols-2 gap-6">
        <SalesPipelineWidget pipeline={salesData.pipeline} />
        <LeadConversionWidget conversionRate={salesData.leadConversionRate} />
        <RevenueForecastWidget forecastData={salesData.revenueForecast} /> {/* Pass data here */}
        <KPIsWidget kpis={salesData.performanceKPIs} />
      </div>
      <div className="mt-6">
        <ActivityFeed activities={salesData.recentActivity} />
      </div>
      <div className="mt-6">
        <Notifications />
      </div>
    </div>

  );
};

export default SalesOverview;
