export const fetchAlerts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todoss'); // Replace with actual API endpoint
    return response.json();
  };
  
  export const createReminder = async (reminderData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reminderData),
    });
    return response.json();
  };