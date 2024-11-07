import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Dashboardemp from './Dashboardemp';
import Employees from './Employees';
import TaskBoard from './TaskBoard';
import TimeTracker from './TimeTracker';
import WorkScheduleTable from './WorkScheduleTable';
import PerformanceReviewTable from './PerformanceReviewTable';
import AttendanceTable from './AttendanceTable';

const Sidebaremp = () => {
  // State to track which section is currently active, defaulting to 'dashboard'
  const [activeSection, setActiveSection] = useState('dashboard');

  // Function to check if a section is active and apply active class styling
  const getActiveClass = (section) => {
    return section === activeSection ? 'bg-gray-700' : 'hover:bg-gray-700';
  };

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
            <h2 className="text-2xl font-semibold text-white">Employee Dashboard</h2>
          </div>
          <ul className="flex justify-between bg-gray-900 w-full">
            <li className={`p-4 ${getActiveClass('dashboard')}`}>
              <Link to="#" onClick={() => setActiveSection('dashboard')}>
                Dashboard
              </Link>
            </li>
            <li className={`p-4 ${getActiveClass('employee-dashboard')}`}>
              <Link to="#" onClick={() => setActiveSection('employee-dashboard')}>
                Profile
              </Link>
            </li>
            <li className={`p-4 ${getActiveClass('taskboard')}`}>
              <Link to="#" onClick={() => setActiveSection('taskboard')}>
                Tasks
              </Link>
            </li>
            <li className={`p-4 ${getActiveClass('time-tracker')}`}>
              <Link to="#" onClick={() => setActiveSection('time-tracker')}>
                Time Tracking
              </Link>
            </li>
            <li className={`p-4 ${getActiveClass('workschedule')}`}>
              <Link to="#" onClick={() => setActiveSection('workschedule')}>
                Schedule
              </Link>
            </li>
            <li className={`p-4 ${getActiveClass('performance')}`}>
              <Link to="#" onClick={() => setActiveSection('performance')}>
                Performance
              </Link>
            </li>
            <li className={`p-4 ${getActiveClass('attendance')}`}>
              <Link to="#" onClick={() => setActiveSection('attendance')}>
                Attendance
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditionally Render Components Based on activeSection */}
        <div className="p-6 overflow-y-scroll h-full">
          {activeSection === 'dashboard' && <Dashboardemp />}
          {activeSection === 'employee-dashboard' && <Employees />}
          {activeSection === 'taskboard' && <TaskBoard />}
          {activeSection === 'time-tracker' && <TimeTracker />}
          {activeSection === 'workschedule' && <WorkScheduleTable />}
          {activeSection === 'performance' && <PerformanceReviewTable />}
          {activeSection === 'attendance' && <AttendanceTable />}
        </div>
      </div>
    </div>
  );
};

export default Sidebaremp;
