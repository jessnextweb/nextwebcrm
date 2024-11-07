// ROICalculator.js
import React, { useState } from 'react';

const ROICalculator = () => {
  const [campaignCost, setCampaignCost] = useState(0);
  const [campaignRevenue, setCampaignRevenue] = useState(0);
  const roi = ((campaignRevenue - campaignCost) / campaignCost) * 100;

  return (
    <div className="roi-calculator bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Campaign ROI Calculator</h2>
      <div>
        <label>Campaign Cost ($):</label>
        <input
          type="number"
          value={campaignCost}
          onChange={(e) => setCampaignCost(e.target.value)}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Campaign Revenue ($):</label>
        <input
          type="number"
          value={campaignRevenue}
          onChange={(e) => setCampaignRevenue(e.target.value)}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Return on Investment (ROI):</label>
        <p>{roi.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default ROICalculator;