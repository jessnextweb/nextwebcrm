// ForecastingWidget.js
import React, { useEffect, useState } from 'react';
import { getBudgetForecast } from '../../services/budgetService';

const ForecastingWidget = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const data = await getBudgetForecast();
      setForecastData(data);
    };
    fetchForecast();
  }, []);

  return (
    <div className="forecasting-widget bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">AI-Powered Budget Forecast</h2>
      <ul>
        {forecastData.map((forecast, index) => (
          <li key={index}>
            <strong>{forecast.category}:</strong> ${forecast.predictedAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastingWidget;
