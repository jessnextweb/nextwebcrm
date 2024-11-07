import axios from 'axios';

// Function to fetch activity logs from a server
export const fetchActivityLogs = async () => {
  try {
    // Simulate an API call with axios
    const response = await axios.get('https://retoolapi.dev/XQ9PeH/data'); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching activity logs:', error);
    throw error; // Re-throw the error to be handled by the component
  }
};
