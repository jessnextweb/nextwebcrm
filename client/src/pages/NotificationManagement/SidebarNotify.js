import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import NotificationsOverview from './NotificationsOverview';
import NotificationDashboardTab from './NotificationDashboardTab';
import FinancialNotificationDashboardTab from './FinancialNotificationDashboardTab';
import MarketingNotificationDashboardTab from './MarketingNotificationDashboardTab';
import AdminNotificationDashboardTab from './AdminNotificationDashboardTab';

const SidebarNotify = () => {
  // Set default active section to 'notifyoverview'
  const [activeSection, setActiveSection] = useState('notifyoverview');

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
            <h2 className="text-2xl font-semibold text-white">Notify Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'notifyoverview' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('notifyoverview')}>
                Notifications Overview
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'taskandproject' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('taskandproject')}>
                Task & Project Notifications
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'finannotifydash' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('finannotifydash')}>
                Payment & Financial Notification
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'marketnotify' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('marketnotify')}>
                Marketing & Campaign Notification
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'systemandadmin' ? 'bg-gray-600' : ''}`}
            >
              <Link to="#" onClick={() => setActiveSection('systemandadmin')}>
                System & Admin Notifications Tab
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render Components Based on activeSection */}
        
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'notifyoverview' && <NotificationsOverview />}
          {activeSection === 'taskandproject' && <NotificationDashboardTab />}
          {activeSection === 'marketnotify' && <MarketingNotificationDashboardTab />}
          {activeSection === 'systemandadmin' && <AdminNotificationDashboardTab />}
          {activeSection === 'finannotifydash' && <FinancialNotificationDashboardTab />}
        </div>
      </div>
    </div>
  );
};

export default SidebarNotify;
