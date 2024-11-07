import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ClientManagement from './ClientManagement';
import CommunicationHub from './CommunicationHub';
import AIInsights from '../SalesManagement/AIInsights';
import ActivityLog from './ActivityLog';
import BulkUpload from './BulkUpload';
import ExportDataButton from './ExportDataButton';
import ClientSegmentation from './ClientSegmentation';
import NPSSurvey from './NPSSurvey';
import ReminderForm from './ReminderForm';
import ReportsAnalytics from './ReportsAnalytics';

const Sidebarclient = () => {
  // Set the default active section to 'clientmanagement'
  const [activeSection, setActiveSection] = useState('clientmanagement');

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
            <h2 className="text-2xl font-semibold text-white">Client Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li
              className={`p-4 ${
                activeSection === 'clientmanagement' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('clientmanagement')}>
                Client Management
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'comhub' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('comhub')}>
              Communication Hub
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'aiinsights' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('aiinsights')}>
              AI-Powered Client Insights
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'activitylog' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('activitylog')}>
              Activity Log
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'bulkupload' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('bulkupload')}>
              Bulk Data Upload
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'npssurvey' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('npssurvey')}>
              Client Satisfaction Surveys Tab (NPS)
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'reminderform' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('reminderform')}>
              Reminders & Alerts Tab
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'exportdata' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('exportdata')}>
              Export Data Tab
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'clientseg' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('clientseg')}>
              Client Segmentation Tab
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'reportanalytics' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'clientmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('reportanalytics')}>
              Reports & Analytics Tab
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render ClientManagement Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'clientmanagement' && <ClientManagement />}
          {activeSection === 'comhub' && <CommunicationHub />}
   
          {activeSection === 'aiinsights' && <AIInsights />}
          {activeSection === 'activitylog' && <ActivityLog />}
          {activeSection === 'aiinsights' && <AIInsights />}
          {activeSection === 'bulkupload' && <BulkUpload />}
          {activeSection === 'exportdata' && <ExportDataButton />}
          {activeSection === 'clientseg' && <ClientSegmentation />}
          {activeSection === 'npssurvey' && <NPSSurvey />}
          {activeSection === 'reminderform' && <ReminderForm />}
          {activeSection === 'reportanalytics' && <ReportsAnalytics />}
        </div>
      </div>
    </div>
  );
};

export default Sidebarclient;
