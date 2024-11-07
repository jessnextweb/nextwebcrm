// invoiceService.js
import axios from 'axios';

export const fetchInvoices = async () => {
  try {
    // Simulate API call to fetch invoices
    const response = await axios.get('https://retoolapi.dev/G3bcU1/data'); // Adjust the endpoint accordingly
    return response.data; // Assuming the data is in the correct format
  } 
//   try {
//     // Simulate API call to fetch invoices
//     return [
//         {
//           id: 1,
//           number: 'INV-001',
//           clientName: 'John Doe',
//           amount: 500.0,
//           dueDate: '2024-11-01',
//           status: 'Paid',
//         },
//         {
//           id: 2,
//           number: 'INV-002',
//           clientName: 'Jane Smith',
//           amount: 750.0,
//           dueDate: '2024-12-15',
//           status: 'Pending',
//         },
//       ];
//   }
catch (error) {
    console.error('Error fetching invoices:', error);
    return [
      {
        id: 1,
        number: 'INV-001',
        clientName: 'John Doe',
        amount: 500.0,
        dueDate: '2024-11-01',
        status: 'Paid',
      },
      {
        id: 2,
        number: 'INV-002',
        clientName: 'Jane Smith',
        amount: 750.0,
        dueDate: '2024-12-15',
        status: 'Pending',
      },
    ];
  }
};
