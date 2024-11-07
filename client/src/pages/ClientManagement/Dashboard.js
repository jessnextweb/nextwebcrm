// import React from 'react';

// const Dashboard = ({ projects, invoices }) => {
//   const totalProjects = projects.length;
//   const unpaidInvoices = invoices.filter((invoice) => invoice.status === 'Unpaid').length;

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold">Total Projects</h2>
//           <p className="text-2xl">{totalProjects}</p>
//         </div>
//         <div className="bg-red-100 p-4 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold">Unpaid Invoices</h2>
//           <p className="text-2xl">{unpaidInvoices}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import Dashboard from './Dashboard';

const App = () => {
  const projects = [
    { id: 1, title: 'Project 1', status: 'Completed' },
    { id: 2, title: 'Project 2', status: 'In Progress' },
    // Add more projects as needed
  ];

  const invoices = [
    { id: 1, amount: 100, status: 'Paid', dueDate: '2024-10-01' },
    { id: 2, amount: 200, status: 'Unpaid', dueDate: '2024-10-15' },
    // Add more invoices as needed
  ];

  return (
    <div className="App">
      <Dashboard projects={projects} invoices={invoices} />
      {/* Render other components as needed */}
    </div>
  );
};

export default App;
