
  // Replace 'https://public-api-url.com/nps' with the actual public API URL
export const fetchNPSData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Public API URL
    return response.json();
  };
  
  export const submitNPSSurvey = async (surveyData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(surveyData),
    });
    return response.json();
  };




  