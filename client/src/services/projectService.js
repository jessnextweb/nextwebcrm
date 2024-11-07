// services/projectService.js

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Update this URL to your actual API endpoint

export const fetchProjects = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Network response was not ok'); // Handle HTTP errors
    }

    const data = await response.json(); // Parse JSON response
    return data; // Return the projects data
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // Return an empty array in case of an error
  }
};
