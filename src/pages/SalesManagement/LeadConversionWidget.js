// LeadConversionWidget.js
import React from 'react';

const LeadConversionWidget = ({ conversionRate }) => {
  return (
    <div className="lead-conversion-widget bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Lead Conversion Rate</h2>
      <p className="text-xl">{conversionRate}%</p>
      <p className="text-gray-600">AI-Powered Lead Conversion Analytics</p>
    </div>
  );
};

export default LeadConversionWidget;