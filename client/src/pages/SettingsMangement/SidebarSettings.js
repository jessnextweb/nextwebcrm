import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import GeneralSettings from './GeneralSettings';
import UserRoleManagement from './UserRoleManagement';
import NotificationSettings from '../NotificationManagement/NotificationSettings';
import APIIntegrationsTab from './APIIntegrationsTab';
import SecurityPrivacyTab from './SecurityPrivacyTab';
import BillingSubscriptionTab from './BillingSubscriptionTab';

const SidebarSettings = () => {
  // State to track which section is currently active, defaulting to 'generalset'
  const [activeSection, setActiveSection] = useState('generalset');

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
            <h2 className="text-2xl font-semibold text-white">Settings Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li
              className={`p-4 ${
                activeSection === 'generalset' ? 'bg-gray-700' : 'hover:bg-gray-700'
              } text-white`}
            >
              <Link to="#" onClick={() => setActiveSection('generalset')}>
                General Settings
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'userrole' ? 'bg-gray-700' : 'hover:bg-gray-700'
              } text-white`}
            >
              <Link to="#" onClick={() => setActiveSection('userrole')}>
                User & Role Management
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'notificationsset' ? 'bg-gray-700' : 'hover:bg-gray-700'
              } text-white`}
            >
              <Link to="#" onClick={() => setActiveSection('notificationsset')}>
                Notification Settings
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'apiinter' ? 'bg-gray-700' : 'hover:bg-gray-700'
              } text-white`}
            >
              <Link to="#" onClick={() => setActiveSection('apiinter')}>
                API & Integrations
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'secpritab' ? 'bg-gray-700' : 'hover:bg-gray-700'
              } text-white`}
            >
              <Link to="#" onClick={() => setActiveSection('secpritab')}>
                Security & Privacy Settings
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'billsub' ? 'bg-gray-700' : 'hover:bg-gray-700'
              } text-white`}
            >
              <Link to="#" onClick={() => setActiveSection('billsub')}>
                Billing & Subscription Management
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render Components Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'generalset' && <GeneralSettings />}
          {activeSection === 'userrole' && <UserRoleManagement />}
          {activeSection === 'apiinter' && <APIIntegrationsTab />}
          {activeSection === 'secpritab' && <SecurityPrivacyTab/>}
          {activeSection === 'billsub' && <BillingSubscriptionTab/>}
          {activeSection === 'notificationsset' && <NotificationSettings />}
        </div>
      </div>
    </div>
  );
};

export default SidebarSettings;
