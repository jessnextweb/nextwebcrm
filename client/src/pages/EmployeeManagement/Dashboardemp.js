// import React, { useState, useEffect } from 'react';
// import DashboardCard from './DashboardCard';
// // import Header from '../components/Header';
// // import Sidebar from '../components/Sidebar';
// import Sidebar from './Sidebaremp';
// import Header from '../../components/Header';
// import { fetchDashboardStats } from '../../services/dashboardService';

// const Dashboardemp = () => {
//   const [stats, setStats] = useState({
//     clients: 0,
//     employees: 0,
//     projects: 0,
//     revenue: 0,
//     kpi: { leadConversion: 0, taskCompletion: 0, salesForecasting: 0 },
//   });

//   useEffect(() => {
//     fetchDashboardStats().then((res) => {
//       setStats(res.data);
//     });
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Header title="Admin Dashboard" />
//         <div className="p-6 grid grid-cols-4 gap-4">
//           <DashboardCard title="Clients" value={stats.clients} icon="👥" />
//           <DashboardCard title="Employees" value={stats.employees} icon="👔" />
//           <DashboardCard title="Projects" value={stats.projects} icon="📁" />
//           <DashboardCard title="Revenue" value={`$${stats.revenue}`} icon="💰" />
//         </div>
//         <div className="p-6">
//           <h2 className="text-xl font-semibold">Key Performance Indicators (KPIs)</h2>
//           <div className="grid grid-cols-3 gap-4">
//             <DashboardCard title="Lead Conversion" value={`${stats.kpi.leadConversion}%`} icon="📈" />
//             <DashboardCard title="Task Completion" value={`${stats.kpi.taskCompletion}%`} icon="✅" />
//             <DashboardCard title="Sales Forecasting" value={`$${stats.kpi.salesForecasting}`} icon="💡" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboardemp;




import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
// import Sidebar from './Sidebaremp';
// import Header from '../../components/Header';
import { fetchDashboardStats } from '../../services/dashboardService';

const Dashboardemp = () => {
  const [stats, setStats] = useState({
    clients: 0,
    employees: 0,
    projects: 0,
    revenue: 0,
    kpi: { leadConversion: 0, taskCompletion: 0, salesForecasting: 0 },
  });

  useEffect(() => {
    fetchDashboardStats()
      .then((res) => {
        setStats(res.data);
      })
      .catch((error) => {
        console.error('Error fetching dashboard stats:', error);
      });
  }, []);

  // Ensure that the component does not crash by checking if the kpi object is defined
  const isKpiLoaded = stats.kpi && Object.keys(stats.kpi).length > 0;

  return (
    <div className="flex">
     
        <div className="p-6 grid grid-cols-4 gap-4">
          <DashboardCard title="Clients" value={stats.clients} icon="👥" />
          <DashboardCard title="Employees" value={stats.employees} icon="👔" />
          <DashboardCard title="Projects" value={stats.projects} icon="📁" />
          <DashboardCard title="Revenue" value={stats.revenue} icon="💰" />
          <DashboardCard title="Lead Conversion" value={`${stats.leadConversion}%`} icon="📈" />
          <DashboardCard title="Task Completion" value={`${stats.taskCompletion}%`} icon="✅" />
          <DashboardCard title="Sales Forecasting" value={`${stats.salesForecasting}`} icon="💡" />
              
        </div>
        <div className="p-6">
          {/* <h2 className="text-xl font-semibold">Key Performance Indicators (KPIs)</h2> */}
          {/* <div className="grid grid-cols-3 gap-4">
            {isKpiLoaded ? (
              <>
                <DashboardCard title="Lead Conversion" value={`${stats.kpi.leadConversion}%`} icon="📈" />
                <DashboardCard title="Task Completion" value={`${stats.kpi.taskCompletion}%`} icon="✅" />
                <DashboardCard title="Sales Forecasting" value={`$${stats.kpi.salesForecasting}`} icon="💡" />
              </>
            ) : (
              <p>Loading KPIs...</p> // Placeholder while loading
            )}
          </div> */}
        </div>
      
    </div>
  );
};

export default Dashboardemp;
