// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import DashboardCard from '../components/DashboardCard';
// import { fetchDashboardStats } from '../services/dashboardService';

// const Dashboard = () => {
//   const [stats, setStats] = useState({ clients: 0, employees: 0, projects: 0, revenue: 0 });

//   useEffect(() => {
//     fetchDashboardStats().then((res) => setStats(res.data));
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Header adminName="Admin" />
//         <div className="p-6 grid grid-cols-4 gap-4">
//           <DashboardCard title="Clients" value={stats.clients} icon="👥" />
//           <DashboardCard title="Employees" value={stats.employees} icon="👔" />
//           <DashboardCard title="Projects" value={stats.projects} icon="📁" />
//           <DashboardCard title="Revenue" value={`$${stats.revenue}`} icon="💰" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;