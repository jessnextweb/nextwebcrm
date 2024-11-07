// services/dashboardService.js

import axios from 'axios';

// Fetch dashboard statistics from the server
export const fetchDashboardStats = async () => {
  try {
    const response = await axios.get('https://retoolapi.dev/RNvtOc/data'); // Replace with your actual API endpoint
    return response; // This will return the whole response object
  } catch (error) {
    console.error('Error fetching dashboard statistics:', error);
    throw error; // Rethrow error for error handling in the component
  }
};
