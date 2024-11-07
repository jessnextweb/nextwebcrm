import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ProjectTable from './ProjectTable';
import TaskBoard from './TaskBoard'; // Import the TaskBoard component
import Reports from './Reports';
import FileUpload from './FileUpload';
import ProjectModal from './ProjectModal';
import GanttChartpro from './GanttChartpro';
import BudgetManagement from './BudgetManagement';
import ProjectDashboard from './ProjectDashboard';
import MilestoneDashboard from './MilestoneDashboard';
import AutomationDashboard from './AutomationDashboard';
import RiskIssueDashboard from './RiskIssueDashboard';

const SidebarPro = () => {
  // State to track which section is currently active, defaulting to 'projectsOverview'
  const [activeSection, setActiveSection] = useState('projectsOverview');

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
            <h2 className="text-2xl font-semibold text-white">Project Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li
              className={`p-4 ${
                activeSection === 'projectsOverview' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'projectsOverview' when clicked */}
              <Link to="#" onClick={() => setActiveSection('projectsOverview')}>
                Projects Overview
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'taskBoard' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'taskBoard' when clicked */}
              <Link to="#" onClick={() => setActiveSection('taskBoard')}>
                Task Board
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'ganttchart' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'ganttchart' when clicked */}
              <Link to="#" onClick={() => setActiveSection('ganttchart')}>
                Gantt Chart
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'fileupload' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'fileupload' when clicked */}
              <Link to="#" onClick={() => setActiveSection('fileupload')}>
                File Upload
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'report' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'report' when clicked */}
              <Link to="#" onClick={() => setActiveSection('report')}>
                Project Reports
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'budgetmanagement' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'budgetmanagement' when clicked */}
              <Link to="#" onClick={() => setActiveSection('budgetmanagement')}>
                Budget and Resource Management
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'projectcolab' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'projectcolab' when clicked */}
              <Link to="#" onClick={() => setActiveSection('projectcolab')}>
                Project Collaboration Tools
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'milestonetrack' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'milestonetrack' when clicked */}
              <Link to="#" onClick={() => setActiveSection('milestonetrack')}>
                Milestone Tracking
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'automationwork' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'automationwork' when clicked */}
              <Link to="#" onClick={() => setActiveSection('automationwork')}>
                Automation Workflow
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeSection === 'riskissue' ? 'bg-gray-500' : 'hover:bg-gray-700'
              }`}
            >
              {/* Update the active section to 'riskissue' when clicked */}
              <Link to="#" onClick={() => setActiveSection('riskissue')}>
                Risk and Issue Management
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render ProjectTable or TaskBoard Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'projectsOverview' && <ProjectTable />}
          {activeSection === 'taskBoard' && <TaskBoard />}
          {activeSection === 'report' && <Reports />}
          {activeSection === 'fileupload' && <FileUpload />}
          {activeSection === 'ganttchart' && <GanttChartpro />}
          {activeSection === 'projectmodal' && <ProjectModal />}
          {activeSection === 'budgetmanagement' && <BudgetManagement />}
          {activeSection === 'projectcolab' && <ProjectDashboard />}
          {activeSection === 'milestonetrack' && <MilestoneDashboard />}
          {activeSection === 'automationwork' && <AutomationDashboard />}
          {activeSection === 'riskissue' && <RiskIssueDashboard />}
        </div>
      </div>
    </div>
  );
};

export default SidebarPro;
