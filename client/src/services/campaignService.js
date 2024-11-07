// campaignService.js

export const fetchCampaigns = async () => {
    try {
      // Simulate API call to fetch campaigns
      const response = await fetch('https://retoolapi.dev/UPrhfi/data'); // Adjust the endpoint accordingly
  
      // Check if the response is okay (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse the JSON from the response
      return data; // Assuming the data is in the correct format
    } 
    catch (error) {
      console.error('Error fetching campaigns:', error);
      
      // Return fallback data in case of an error
      return [
        {
          id: 1,
          name: 'New Product Launch',
          type: 'Email',
          segment: 'All Users',
        },
        {
          id: 2,
          name: 'Summer Promotion',
          type: 'Social Media',
          segment: 'Active Users',
        },
      ];
    }
  };
  
  export const createCampaign = async (newCampaign) => {
    try {
      // Simulate API call to create a new campaign
      const response = await fetch('https://retoolapi.dev/88PxAK/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCampaign),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const createdCampaign = await response.json();
      return createdCampaign;
    } catch (error) {
      console.error('Error creating campaign:', error);
      return null; // Handle error or provide fallback behavior if needed
    }
  };
  