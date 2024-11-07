import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-green-500 min-h-screen">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-white">Admin Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/admin-dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarclient">Clients</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebaremp">Employees</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarpro">Projects</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarsale">Sales</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarfinan">Financials</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarreports">Reports</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarmarket">Marketing</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarnotify">Notifications</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarsettings">Settings</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 text-white">
            <Link to="/sidebarsupport">Support</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
