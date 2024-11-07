import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebaremp';
import Header from '../../components/Header';
import Table from '../EmployeeManagement/Table';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';
import { fetchEmployees, addEmployee, editEmployee, deleteEmployee } from '../services/employeeService';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  // Fetch employees from the API when component mounts
  useEffect(() => {
    fetchEmployees()
      .then((res) => {
        const employeeData = res.data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          position: user.username,  // Assuming API doesn't return position, using username as a placeholder
          status: 'Active',         // Setting a default status
        }));
        setEmployees(employeeData);
        setFilteredEmployees(employeeData);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

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
    setIsModalOpen(true);     // Open modal for adding new employee
  };

  const handleEdit = (index) => {
    setCurrentEmployee(filteredEmployees[index]); // Set the employee to be edited
    setIsModalOpen(true);                         // Open modal for editing
  };

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId)
      .then(() => {
        setEmployees((prev) => prev.filter(emp => emp.id !== employeeId));  // Remove from state
        setFilteredEmployees((prev) => prev.filter(emp => emp.id !== employeeId)); // Remove from filtered
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  const handleSubmit = (formData) => {
    if (currentEmployee) {
      // Edit employee
      editEmployee(currentEmployee.id, formData)
        .then((res) => {
          setEmployees((prev) =>
            prev.map((emp) =>
              emp.id === currentEmployee.id ? { ...emp, ...formData } : emp
            )
          );
          setFilteredEmployees((prev) =>
            prev.map((emp) =>
              emp.id === currentEmployee.id ? { ...emp, ...formData } : emp
            )
          );
        })
        .catch((error) => {
          console.error("Error editing employee:", error);
        });
    } else {
      // Add new employee
      addEmployee(formData)
        .then((res) => {
          const newEmployee = { id: res.data.id, ...formData };  // Assuming the API returns the newly created ID
          setEmployees((prev) => [...prev, newEmployee]);  // Add to the list
          setFilteredEmployees((prev) => [...prev, newEmployee]);
        })
        .catch((error) => {
          console.error("Error adding employee:", error);
        });
    }
    setIsModalOpen(false);  // Close modal after adding/editing
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
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header adminName="Admin" />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Employees</h1>
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={handleSearch}
              className="px-4 py-2 border rounded-md"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleAdd}
            >
              Add Employee
            </button>
          </div>
          <Table headers={headers} data={data} onEdit={handleEdit} onDelete={(index) => handleDelete(currentEmployees[index].id)} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            position: e.target.position.value,
            status: e.target.status.value,
          };
          handleSubmit(formData);
        }}>
          <input type="text" name="name" placeholder="Name" required defaultValue={currentEmployee?.name || ''} />
          <input type="email" name="email" placeholder="Email" required defaultValue={currentEmployee?.email || ''} />
          <input type="text" name="position" placeholder="Position" required defaultValue={currentEmployee?.position || ''} />
          <input type="text" name="status" placeholder="Status" required defaultValue={currentEmployee?.status || ''} />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default Employees;
