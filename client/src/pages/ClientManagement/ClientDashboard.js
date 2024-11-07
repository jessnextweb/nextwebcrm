// ClientDashboard.js
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ClientManagement from '../../pages/ClientManagement/ClientManagement';
import CommunicationHub from '../../pages/ClientManagement/CommunicationHub';
import AIInsights from './AIInsightsclient';
import ActivityLog from '../../pages/ClientManagement/ActivityLog';
import BulkUpload from '../../pages/ClientManagement/BulkUpload';
// import NPS from '../components/NPS';
// import Alerts from '../components/Alerts';
import ExportData from '../../pages/ClientManagement/ExportDataButton';
import ClientSegmentation from '../../pages/ClientManagement/ClientSegmentation';
// import ReportsAnalytics from '../../pages/ClientManagement/';

const ClientDashboard = () => {
  return (
    <div className="client-dashboard flex">
      <Sidebar />
      <div className="content w-full p-4">
        <Header />
        <div className="grid grid-cols-2 gap-6">
          <ClientManagement />
          <AIInsights />
          <CommunicationHub />
          <ActivityLog />
          <BulkUpload />
          {/* <NPS /> */}
          {/* <Alerts /> */}
          <ClientSegmentation />
          <ExportData />
          {/* <ReportsAnalytics /> */}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
