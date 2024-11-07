// supportService.js
import axios from 'axios';

export const fetchTickets = async () => {
  try {
    const response = await axios.get('https://retoolapi.dev/RTbyuH/data'); // Assuming your API endpoint is '/api/tickets'
    return response.data; // Return the data received from the API
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return []; // Return an empty array in case of error
  }
};


// supportService.js
export const fetchSupportTickets = async () => {
  const response = await fetch('https://retoolapi.dev/TA5qyF/data');
  return response.json();
};

export const updateTicketStatus = async (ticketId, status) => {
  const response = await fetch('https://retoolapi.dev/TA5qyF/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const fetchResolutionSuggestions = async (issueId) => {
  const response = await fetch('https://retoolapi.dev/TA5qyF/data');
  return response.json();
};

export const escalateTicket = async (ticketId) => {
  // Logic to escalate the ticket, e.g., sending a request to your API
  const response = await fetch(`https://retoolapi.dev/RTbyuH/data`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to escalate ticket');
  }

  const updatedTicket = await response.json();
  return updatedTicket;
};


export const fetchSupportData = async () => {
  try {
    const response = await axios.get('https://retoolapi.dev/RTbyuH/data');
    return response.data; // Assume the API provides all the necessary support data
  } catch (error) {
    console.error('Error fetching support data:', error);
    return {
      totalTickets: {
        open: 0,
        closed: 0,
        pending: 0,
      },
      ticketSource: {
        email: 0,
        chat: 0,
        phone: 0,
      },
      averageResponseTime: 0,
      averageResolutionTime: 0,
      escalations: 0,
      chatbot: {
        automatedResolutions: 0,
        handovers: 0,
      },
    }; // Return default values in case of an error
  }
};
