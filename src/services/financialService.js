// financialService.js
import axios from 'axios';

export const fetchFinancialOverview = async () => {
  try {
    // // //Simulate API call
    // const response = await axios.get('https://retoolapi.dev/cM7cqR/data');
    // console.log("responsefinan", response);
    // // Adjust the API endpoint accordingly
    // // Assuming the response data has the structure you need
    // return response.data;

    return {
        revenue: 0,
        expenses: 0,
        profitLoss: 0,
        cashFlow: 0,
      };
  } catch (error) {
    console.error('Error fetching financial overview:', error);
    // Fallback data in case of error
    return {
      revenue: 0,
      expenses: 0,
      profitLoss: 0,
      cashFlow: 0,
    };
  }
};
