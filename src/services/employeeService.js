import axios from 'axios';

// Use a mock public API for employee data
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch all employees (users)
export const fetchEmployees = () => {
  return axios.get(API_URL); // Fetches user data
};

// Since the public API is read-only, these are just placeholders for adding/editing/deleting
// You won't be able to actually modify data on public APIs like this.
// However, if using a mock backend or a real backend, these will work.
export const addEmployee = (employeeData) => {
  console.warn('Public APIs are read-only; cannot add employee.');
  return Promise.resolve({ data: employeeData }); // Mock the response
};

export const editEmployee = (employeeId, employeeData) => {
  console.warn('Public APIs are read-only; cannot edit employee.');
  return Promise.resolve({ data: employeeData }); // Mock the response
};

export const deleteEmployee = (employeeId) => {
  console.warn('Public APIs are read-only; cannot delete employee.');
  return Promise.resolve(); // Mock the response
};
