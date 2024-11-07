import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import FinancialOverview from './FinancialOverview';
import InvoicingTable from './InvoicingTable';
import ExpensesTable from './ExpensesTable';
import TaxManagement from './TaxManagement';
import FinancialReports from './FinancialReports';
import BudgetActualAnalysis from './BudgetActualAnalysis';
import PaymentsOverviewTab from './PaymentsOverview';
import PaymentsOverview from './PaymentsOverview';

const SidebarFinan = () => {
  // Set default active section to 'financialoverview'
  const [activeSection, setActiveSection] = useState('financialoverview');

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
            <h2 className="text-2xl font-semibold text-white">Financial Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'financialoverview' ? 'bg-gray-600' : ''}`}
              >
              <Link to="#" onClick={() => setActiveSection('financialoverview')}>
                Financial Overview
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'financialinvoice' ? 'bg-gray-600' : ''}`}
              >
              <Link to="#" onClick={() => setActiveSection('financialinvoice')}>
                Invoicing & Payment
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'expensestab' ? 'bg-gray-600' : ''}`}
              >
              <Link to="#" onClick={() => setActiveSection('expensestab')}>
                Expenses & Budgeting
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'automation' ? 'bg-gray-600' : ''}`}
              >
              <Link to="#" onClick={() => setActiveSection('financialreport')}>
                Financial Reports
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'taxmanagement' ? 'bg-gray-600' : ''}`}
              >
              <Link to="#" onClick={() => setActiveSection('taxmanagement')}>
                Tax Management
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'budgetanalysis' ? 'bg-gray-600' : ''}`}
              >
              <Link to="#" onClick={() => setActiveSection('budgetact')}>
                Budget vs Actual Analysis
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 text-white ${activeSection === 'paymentsoverview' ? 'bg-gray-600' : ''}`}
              >
              <Link to="#" onClick={() => setActiveSection('paymentsoverview')}>
                Payments Overview
              </Link>
            </li>  
          </ul>
        </nav>

        {/* Conditionally Render Components Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
  {activeSection === 'financialoverview' && <FinancialOverview />}
  {activeSection === 'financialinvoice' && <InvoicingTable />}
  {activeSection === 'expensestab' && <ExpensesTable />}
  {activeSection === 'taxmanagement' && < TaxManagement />}
  {activeSection === 'financialreport' && <FinancialReports />}
  {activeSection === 'budgetact' && <BudgetActualAnalysis />}
  {activeSection === 'paymentsoverview' && < PaymentsOverview />}
        </div>
      </div>
    </div>
  );
};

export default SidebarFinan;
