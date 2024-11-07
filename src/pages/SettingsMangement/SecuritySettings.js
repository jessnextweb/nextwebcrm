// SecuritySettings.js
import React, { useState } from 'react';
import { updatePassword, updateTwoFactorAuth } from '../../services/securityService';

const SecuritySettings = () => {
  const [newPassword, setNewPassword] = useState('');
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const handlePasswordChange = async () => {
    const success = await updatePassword(newPassword);
    if (success) {
      alert('Password updated successfully!');
      setNewPassword('');
    } else {
      alert('Error updating password.');
    }
  };

  const handleTwoFactorToggle = async () => {
    const success = await updateTwoFactorAuth(!isTwoFactorEnabled);
    if (success) {
      setIsTwoFactorEnabled(!isTwoFactorEnabled);
      alert('Two-Factor Authentication updated successfully!');
    } else {
      alert('Error updating Two-Factor Authentication.');
    }
  };

  return (
    <div className="security-settings bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
      <div className="mb-4">
        <label className="block mb-2">New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="block w-full p-2 border rounded"
          placeholder="Enter New Password"
        />
        <button onClick={handlePasswordChange} className="bg-blue-500 text-white p-2 rounded mt-2">
          Change Password
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Two-Factor Authentication:</label>
        <button
          onClick={handleTwoFactorToggle}
          className={`${
            isTwoFactorEnabled ? 'bg-green-500' : 'bg-gray-500'
          } text-white p-2 rounded`}
        >
          {isTwoFactorEnabled ? 'Disable' : 'Enable'}
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;