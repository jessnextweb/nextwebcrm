import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TicketTable from './TicketTable';
import ChatbotIntegration from './ChatbotIntegration';
import KnowledgeBase from './KnowledgeBase';
import SupportOverview from './SupportOverview';
import PerformanceAnalytics from './PerformanceAnalytics';

// import SidebarNotify from '../../pages/NotificationManagement/'

const SidebarSupport = () => {


  const [activeSection, setActiveSection] = useState('supportoverview');

  return (
    <div className="flex h-screen">
      
      <Sidebar />

      <div className="flex-1">
       
        <Header adminName="Admin" />

       
        <nav className="bg-gray-800 text-white w-full">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-white">Support Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('supportoverview')}>
              Support Overview
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('tickettab')}>
              Ticket Management
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('chatbotinte')}>
              AI Chatbot Integration
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('knowledgebase')}>
              Knowledge Base Management
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('performanceanalytics')}>
              Performance Analytics
              </Link>
            </li>
           
          </ul>
        </nav>

        {/* Conditionally Render Components Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'tickettab' && < TicketTable />}
          {activeSection === 'chatbotinte' && < ChatbotIntegration />}
          {activeSection === 'knowledgebase' && < KnowledgeBase />}
          {activeSection === 'performanceanalytics' && < PerformanceAnalytics />}
          {activeSection === 'supportoverview' && < SupportOverview /> }
        </div>
      </div>
    </div>
  );
};

export default SidebarSupport;
