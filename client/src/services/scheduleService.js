// scheduleService.js
export const fetchSchedules = async () => {
    try {
      const response = await fetch('https://retoolapi.dev/bylfEh/data'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch schedules');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching schedules:', error);
      return [];
    }
  };
  