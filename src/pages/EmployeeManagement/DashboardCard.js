import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
      <div className="text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
