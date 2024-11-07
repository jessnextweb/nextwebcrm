// services/attendanceService.js

export const fetchAttendanceData = async () => {
    try {
      const response = await fetch('https://retoolapi.dev/9jiGko/data'); // Adjust the URL to your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json(); // Assuming the response is in JSON format
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      throw error; // Rethrow the error to be handled in the component
    }
  };
  