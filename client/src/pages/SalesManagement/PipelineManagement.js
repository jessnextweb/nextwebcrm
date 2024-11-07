// PipelineManagement.js
import React from 'react';

const PipelineManagement = ({ stages, opportunities }) => {
  return (
    <div className="pipeline-management flex justify-between p-6 bg-white shadow-md rounded-md">
      {stages.map((stage) => (
        <div key={stage} className="stage w-1/4 p-4">
          <h3 className="text-lg font-semibold mb-4">{stage}</h3>
          <ul>
            {opportunities
              .filter((opportunity) => opportunity.stage === stage)
              .map((opportunity) => (
                <li key={opportunity.id} className="mb-4">
                  <div className="bg-gray-200 p-2 rounded-md">
                    <strong>{opportunity.name}</strong>
                    <p>${opportunity.value}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PipelineManagement;