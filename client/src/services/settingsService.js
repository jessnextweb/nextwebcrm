// settingsService.js
import axios from 'axios';

const API_URL = 'https://retoolapi.dev/nYE4ef/data'; 

// Fetch current settings
export const fetchSettings = async () => {
  try {
    const response = await axios.get("https://retoolapi.dev/nYE4ef/data");
    console.log("response",response)
    return response.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return {
      name: '',
      email: '',
      companyName: '',
      language: 'English',
      timezone: 'UTC',
    }; 
  }
};

// Update settings
export const updateSettings = async (settings) => {
  try {
    const response = await axios.get("https://retoolapi.dev/nYE4ef/data");
    // const response = await axios.put("https://retoolapi.dev/nYE4ef/data", settings);
    return response.data; 
  } catch (error) {
    console.error('Error updating settings:', error);
    return null;
  }
};


