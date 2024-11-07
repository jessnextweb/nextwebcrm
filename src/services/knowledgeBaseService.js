// knowledgeBaseService.js
import axios from 'axios';

const API_URL = 'https://retoolapi.dev/IaN4WJ/data'; // Replace with your actual API endpoint

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Assuming the API returns a list of articles in the response data
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};
