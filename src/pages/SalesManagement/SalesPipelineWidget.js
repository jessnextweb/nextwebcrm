// SalesPipelineWidget.js
import React from 'react';

const SalesPipelineWidget = ({ pipeline }) => {
  return (
    <div className="sales-pipeline-widget bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Sales Pipeline</h2>
      <ul>
        {pipeline.map((stage) => (
          <li key={stage.id} className="mb-2">
            <strong>{stage.name}:</strong> {stage.deals} deals (${stage.value} value)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesPipelineWidget;