// expenseService.js

export const fetchExpenses = async () => {
    try {
      // Simulate API call to fetch expenses using fetch
      const response = await fetch('https://retoolapi.dev/mA87S1/data'); // Adjust the endpoint accordingly
  
      // Check if the response is okay (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse the JSON from the response
      return data; // Assuming the data is in the correct format
    } 
    catch (error) {
      console.error('Error fetching expenses:', error);
      
      // Return fallback data in case of an error
      return [
        {
          id: 1,
          type: 'Office Supplies',
          vendor: 'ABC Office Supplies',
          amount: 150.75,
          date: '2024-10-10',
        },
        {
          id: 2,
          type: 'Travel',
          vendor: 'XYZ Travel Agency',
          amount: 450.00,
          date: '2024-09-22',
        },
      ];
    }
  };
  