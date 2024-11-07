// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-blue-500 h-screen"> {/* Ensure full height with h-screen */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700"> {/* Add hover effect for better interaction */}
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/clients">Clients</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/employees">Employees</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/sales">Sales</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/financials">Financials</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
