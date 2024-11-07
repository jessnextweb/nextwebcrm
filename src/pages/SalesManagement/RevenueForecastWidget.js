// RevenueForecastWidget.js
import React from 'react';

const RevenueForecastWidget = ({ forecastData }) => {
  // Check if forecastData and its properties are defined
  const forecastAmount = forecastData ? forecastData.forecastAmount : 0; // Default to 0 if undefined

  return (
    <div className="revenue-forecast-widget p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-2">Revenue Forecast</h2>
      <p className="text-lg">Forecast Amount: ${forecastAmount}</p>
    </div>
  );
};

export default RevenueForecastWidget;
