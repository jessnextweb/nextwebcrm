// RolePermissions.js
import React, { useState, useEffect } from 'react';
import { fetchUserRoles, updateUserRole } from '../../services/userService';

const RolePermissions = () => {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    fetchUserRoles().then((data) => {
      console.log("fetchuserrole",data);
      setUsers(data)});
  }, []);

  const handleRoleChange = (userId, newRole) => {
    updateUserRole(userId, newRole).then(() => {
      alert('User role updated successfully!');
      const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      );
      setUsers(updatedUsers);
    });
  };

  return (
    <div className="role-permissions bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Manage User Roles & Permissions</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Change Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="p-2 border rounded-md"
                >
                  <option value="Sales Rep">Sales Rep</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolePermissions;