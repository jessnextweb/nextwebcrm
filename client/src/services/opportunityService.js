// opportunityService.js

export const fetchOpportunities = async () => {
    try {
      // Using a public API as an example
      const response = await fetch('https://retoolapi.dev/xhjroU/data');
      
      if (!response.ok) {
        throw new Error('Failed to fetch opportunities');
      }
      
      const data = await response.json();
      console.log('Fetched data:', data); // Logging the fetched data for debugging
      return data;
    } catch (error) {
      console.error('Error fetching opportunities:', error);
      return [];
    }
  };
