// services/integrationService.js

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Mock public API for demonstration

// Function to fetch existing integrations (if needed)
// export const fetchIntegrations = async () => {
//   // Simulating fetching default integration settings from a mock API
//   return {
//     crm: 'Salesforce',
//     emailProvider: 'Gmail',
//     paymentGateway: 'Stripe',
//   };
// };



// integrationService.js
export const fetchIntegrations = async () => {
  const response = await fetch('https://retoolapi.dev/tx29CS/data');
  return response.json();
};

export const updateIntegrationStatus = async (integrationId, status) => {
  const response = await fetch(`https://retoolapi.dev/tx29CS/data`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ enabled: status }),
  });
  return response.json();
};

export const updateAPIKey = async (apiKeyData) => {
  const response = await fetch('https://retoolapi.dev/tx29CS/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(apiKeyData),
  });
  return response.json();
};

// Function to save integration settings
export const saveIntegrationSettings = async (settings) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings), // Sending the settings as the request body
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to save integration settings: ${errorData.message || response.statusText}`);
    }

    const result = await response.json();
    return result; // Return the result from the API
  } catch (error) {
    console.error('Error saving integration settings:', error);
    throw error; // Rethrow the error for further handling
  }
};
