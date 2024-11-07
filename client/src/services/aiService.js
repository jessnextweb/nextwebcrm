import axios from 'axios';

// Mock API URL (Replace with actual API endpoint)
const API_URL = 'https://retoolapi.dev/ywz8M0/data';

// Fetch AI-powered insights from the backend
export const fetchAIInsights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching AI insights:', error);
    return {
      leadPrioritization: [],
      dealForecasting: 'Unable to fetch deal forecasting data.',
      customerBehavior: 'Unable to fetch customer behavior data.',
    };
  }
};

// aiService.js
export const fetchAIAlerts = async () => {
  // Simulate fetching AI alerts
  return [
    { message: 'Task 1 is overdue!', priority: 'High' },
    { message: 'Payment due tomorrow', priority: 'Medium' },
    { message: 'Campaign performance is low', priority: 'Low' },
  ];
};
