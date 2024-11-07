import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ReportsOverviewTab from './ReportsOverviewTab';
import SalesReportsOverviewTab from './SalesReportsOverviewTab';
import FinancialReportsOverviewTab from './FinancialReportsOverviewTab';
import MarketingReportsOverviewTab from './MarketingReportsOverviewTab';
import OperationReportsOverviewTab from './OperationReportsOverviewTab';



const SidebarReport = () => {
 
  const [activeSection, setActiveSection] = useState('reportoverview');


  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1">
       
        <Header adminName="Admin" />

      
        <nav className="bg-gray-800 text-white w-full">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-white">Reports Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('reportoverview')}>
              Reports Overview Tab
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('salesreportoverview')}>
              Sales Reports
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('finreportoverview')}>
              Financial Report
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('marketreportoverview')}>
              Marketing Reports
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 text-white">
              <Link to="#" onClick={() => setActiveSection('operationreporttoverview')}>
              Operation Reports
              </Link>
            </li>
           
          </ul>
        </nav>

      
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'reportoverview' && <ReportsOverviewTab />}
          {activeSection === 'salesreportoverview' && <SalesReportsOverviewTab />}
          {activeSection === 'finreportoverview' && <FinancialReportsOverviewTab/>}
          {activeSection === 'marketreportoverview' && <MarketingReportsOverviewTab/>}
          {activeSection === 'operationreporttoverview' && <OperationReportsOverviewTab/>}

          
 
        </div>
      </div>
    </div>
  );
};

export default SidebarReport;
