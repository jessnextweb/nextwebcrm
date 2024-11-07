// UserRoleManagement.js
import React, { useState, useEffect } from 'react';
import { fetchUsers, updateUserRole } from '../../services/userService';

const UserRoleManagement = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState(['Admin', 'Editor', 'Viewer']);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const handleRoleChange = (userId, newRole) => {
    updateUserRole(userId, newRole).then(() => {
      setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
    });
  };

  return (
    <div className="user-role-management bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">User & Role Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="p-2 border"
                >
                  {roles.map(role => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRoleManagement;