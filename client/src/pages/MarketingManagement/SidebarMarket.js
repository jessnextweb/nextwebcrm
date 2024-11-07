import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CampaignManagement from './CampaignManagement';
import LeadTableMarket from './LeadTableMarket';
import ROICalculator from './ROICalculator';
import MarketingAnalyticsOverviewTab from './MarketingAnalyticsOverview';
import WorkflowManagementTab from './WorkflowManagementTab';

const SidebarMarket = () => {
  // Set default active section to 'campaignmanage'
  const [activeSection, setActiveSection] = useState('campaignmanage');

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      <div className="flex-1">
        {/* Header Component */}
        <Header adminName="Admin" />

        {/* Navigation Section */}
        <nav className="bg-gray-800 text-white w-full">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-white">Marketing Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'campaignmanage' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('campaignmanage')}>
                Campaign Management
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'financialinvoice' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('marketinganalytics')}>
                Marketing Analytics
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'leadtablemarket' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('leadtablemarket')}>
                Lead Nurturing
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'workflowmanagement' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('workflowmanagement')}>
                Automation & Workflow
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'roical' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('roical')}>
                Reports & Analytics
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render Components Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'campaignmanage' && <CampaignManagement />}
          {activeSection === 'leadtablemarket' && <LeadTableMarket />}
          {activeSection === 'roical' && <ROICalculator />}
          {activeSection === 'marketinganalytics' && <MarketingAnalyticsOverviewTab />}
          {activeSection === 'workflowmanagement' && <WorkflowManagementTab />}
        </div>
      </div>
    </div>
  );
};

export default SidebarMarket;
