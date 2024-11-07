import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers, FaProjectDiagram, FaMoneyBillAlt, FaSalesforce } from 'react-icons/fa';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import Header from '../components/Header';

const AdminDashboard = () => {
  const [overview, setOverview] = useState({
    clients: 0,
    employees: 0,
    projects: 0,
    revenue: 0,
    sales: 0, // Fix for Sales key
  });

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        // const res = await axios.get('/api/admin/overview');
        const res = await axios.get('https://retoolapi.dev/yO7qYL/data');
        console.log("result",res);
        setOverview(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOverview();
  }, []);

  return (
    <div>
       <Header />
    <div className="flex min-h-screen bg-gray-100"> {/* Flex container to hold Sidebar and Dashboard */}
     
      <Sidebar /> {/* Render the Sidebar */}
      <div className="p-8 flex-1"> {/* Allow dashboard to take remaining space */}
        <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <FaUsers className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Clients</h3>
              <p className="text-3xl font-bold">{overview.clients}</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <FaProjectDiagram className="text-4xl text-green-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className="text-3xl font-bold">{overview.projects}</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <FaUsers className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Employees</h3>
              <p className="text-3xl font-bold">{overview.employees}</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <FaSalesforce className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Sales</h3>
              <p className="text-3xl font-bold">{overview.sales}</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <FaMoneyBillAlt className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-3xl font-bold">{overview.revenue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
