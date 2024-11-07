import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebaremp';
// import Header from '../../components/Header';
import Table from '../EmployeeManagement/Table';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  // Filter employees based on the search term
  useEffect(() => {
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAdd = () => {
    setCurrentEmployee(null); // Reset the current employee
    setIsModalOpen(true); // Open modal for adding new employee
  };

  const handleEdit = (index) => {
    setCurrentEmployee(filteredEmployees[index]); // Set the employee to be edited
    setIsModalOpen(true); // Open modal for editing
  };

  const handleDelete = (index) => {
    setEmployees((prev) => prev.filter((_, i) => i !== index)); // Remove the deleted employee from state
    setFilteredEmployees((prev) => prev.filter((_, i) => i !== index)); // Remove from filtered as well
  };

  const handleSubmit = (formData) => {
    if (currentEmployee) {
      // If an employee is selected, edit employee
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === currentEmployee.id ? { ...emp, ...formData } : emp
        )
      );
    } else {
      // Add new employee with a unique ID
      const newEmployee = { id: Date.now(), ...formData }; // Simple unique ID generation
      setEmployees((prev) => [...prev, newEmployee]); // Append new employee to the list
    }
    setIsModalOpen(false); // Close modal after adding/editing
  };

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  // Table headers and data preparation
  const headers = ['Name', 'Email', 'Position', 'Status'];
  const data = currentEmployees.map((employee) => [
    employee.name,
    employee.email,
    employee.position,
    employee.status,
  ]);

  return (
    // <div className="flex">
    //   <Sidebar />
    //   <div className="flex-1">
    //     <Header adminName="Admin" />
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Employees</h1>
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          onClick={handleAdd}
        >
          Add Employee
        </button>
      </div>
      <Table headers={headers} data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Employee form for adding/editing */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Collect form data and pass it to handleSubmit
            const formData = {
              name: e.target.name.value,
              email: e.target.email.value,
              position: e.target.position.value,
              status: e.target.status.value,
            };
            handleSubmit(formData);
          }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            defaultValue={currentEmployee?.name || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            defaultValue={currentEmployee?.email || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            required
            defaultValue={currentEmployee?.position || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            required
            defaultValue={currentEmployee?.status || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Employees;
