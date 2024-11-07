// chatbotService.js
import axios from 'axios';

export const configureChatbot = async (config) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users'); // Assuming your API endpoint is '/api/chatbot/configure'
    console.log("saved successfully");
    return response.data; // Return the response data received from the API
    
  } catch (error) {
    console.error('Error configuring chatbot:', error);
    return { success: false, message: 'Failed to configure chatbot' }; // Return an error message
  }
};
