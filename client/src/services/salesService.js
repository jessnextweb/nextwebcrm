// salesService.js

export const fetchSalesOverviewData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch sales overview data');
      }
      const data = await response.json();
      return {
        totalSales: data.totalSales || 0,
        leadConversionRate: data.leadConversionRate || 0,
        pipeline: data.pipeline || [],
        recentActivity: data.recentActivity || [],
        performanceKPIs: data.performanceKPIs || {},
      };
    } catch (error) {
      console.error('Error fetching sales overview data:', error);
      return {
        totalSales: 0,
        leadConversionRate: 0,
        pipeline: [],
        recentActivity: [],
        performanceKPIs: {},
      };
    }
  };
  
  export const fetchRevenueForecast = async () => {
    try {
      // Replace with your actual API endpoint for revenue forecast
      const response = await fetch('https://api.example.com/revenue-forecast');
  
      if (!response.ok) {
        throw new Error('Failed to fetch revenue forecast');
      }
  
      const data = await response.json();
  
      return data.forecast || {}; // Assuming the API returns a forecast object
    } catch (error) {
      console.error('Error fetching revenue forecast:', error);
      return {}; // Return an empty object on error
    }
  };
  