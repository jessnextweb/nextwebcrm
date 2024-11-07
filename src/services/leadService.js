
// leadService.js

// Example of a function that fetches leads
export const fetchLeads = async () => {
    try {
      const response = await fetch('https://retoolapi.dev/Y5sacD/data'); // Update with your actual API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Return the fetched data
    } catch (error) {
      console.error('Error fetching leads:', error);
      throw error; // Propagate the error
    }
  };
  