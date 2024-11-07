import React, { useState, useEffect } from 'react';
import { fetchAIInsights } from '../../services/aiService'; // Backend API for AI

const AIInsights = () => {
  const [insights, setInsights] = useState({
    leadPrioritization: [],
    dealForecasting: '',
    customerBehavior: ''
  });

  useEffect(() => {
    fetchAIInsights().then((data) => setInsights(data));
  }, []);

  return (
    <div className="ai-insights bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">AI-Powered Insights</h2>
      <div>
        <h3 className="font-medium">Lead Prioritization</h3>
        <ul>
          {insights.leadPrioritization?.length > 0 ? (
            insights.leadPrioritization.map((lead, index) => (
              <li key={index}>
                <strong>{lead.name}</strong> - {lead.priorityScore}
              </li>
            ))
          ) : (
            <li>No lead prioritization data available.</li>
          )}
        </ul>
      </div>
      <div>
        <h3 className="font-medium mt-4">Deal Forecasting</h3>
        <p>{insights.dealForecasting || 'No deal forecasting data available.'}</p>
      </div>
      <div>
        <h3 className="font-medium mt-4">Customer Behavior Analysis</h3>
        <p>{insights.customerBehavior || 'No customer behavior data available.'}</p>
      </div>
    </div>
  );
};

export default AIInsights;
