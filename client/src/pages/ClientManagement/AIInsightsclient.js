// // AIInsights.js
// import React, { useState, useEffect } from 'react';
// import { fetchClientInsights } from '../services/insightsService';

// const AIInsights = () => {
//   const [insights, setInsights] = useState({ churn: 0, upsell: 0, engagement: 0 });

//   useEffect(() => {
//     fetchClientInsights().then(data => setInsights(data));
//   }, []);

//   return (
//     <div className="ai-insights bg-white p-4 rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">AI-Powered Client Insights</h2>
//       <div className="grid grid-cols-3 gap-4">
//         <div>Churn Prediction: {insights.churn}%</div>
//         <div>Upsell Opportunities: {insights.upsell}%</div>
//         <div>Engagement Score: {insights.engagement}</div>
//       </div>
//     </div>
//   );
// };

// export default AIInsights;


// AIInsights.js
import React, { useEffect, useState } from 'react';
import { fetchAIInsights } from '../../services/aiService';

const AIInsightsclient = () => {
  const [insights, setInsights] = useState({ churnRisk: 0, upsellOpportunities: [] });

  useEffect(() => {
    fetchAIInsights().then(data => setInsights(data));
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">AI-Powered Client Insights</h2>
      <p>Churn Risk: {insights.churnRisk}%</p>
      <ul>
        {insights.upsellOpportunities.map((opportunity, index) => (
          <li key={index}>{opportunity}</li>
        ))}
      </ul>
    </div>
  );
};

export default AIInsightsclient;