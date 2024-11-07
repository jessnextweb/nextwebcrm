import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import SalesOverview from './SalesOverview';
import LeadsTable from './LeadTable';
import OpportunitiesTable from './OpportunitiesTable';
import Automation from './Automation';
import AIInsights from './AIInsights';
import DocuSign from './DocuSign';
import GanttChart from './GanttChart';
import ClientTable from './ClientTable';
import NotificationPanel from './NotificationPanel';
import Settings from './Settings';

const Sidebarsal = () => {
  // State to track which section is currently active, defaulting to 'salesoverview'
  const [activeSection, setActiveSection] = useState('salesoverview');

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
            <h2 className="text-2xl font-semibold text-white">Sale Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('salesoverview')}>
                Dashboard
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('leadtab')}>
                Leads
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('opportunities')}>
                Opportunities
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('automation')}>
                Sales Automation
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('aiinsights')}>
                Sales AI
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('docsign')}>
                Quoting & Proposals
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('charts')}>
                Reports & Analytics
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('clientmanage')}>
                Client Managements
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('notification')}>
                Notifications & Alerts
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('settings')}>
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render Components Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'salesoverview' && <SalesOverview />}
          {activeSection === 'leadtab' && <LeadsTable />}
          {activeSection === 'opportunities' && <OpportunitiesTable />}
          {activeSection === 'automation' && <Automation />}
          {activeSection === 'aiinsights' && <AIInsights />}
          {activeSection === 'docsign' && <DocuSign />}
          {activeSection === 'charts' && <GanttChart />}
          {activeSection === 'clientmanage' && <ClientTable />}
          {activeSection === 'notification' && <NotificationPanel />}
          {activeSection === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Sidebarsal;
