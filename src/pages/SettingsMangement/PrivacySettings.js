// PrivacySettings.js
import React, { useState } from 'react';
import { updatePrivacySettings } from '../../services/securityService';

const PrivacySettings = () => {
  const [privacySettings, setPrivacySettings] = useState({
    dataSharing: false,
    dataAccess: 'Only Me',
  });

  const handlePrivacyChange = (e) => {
    setPrivacySettings({ ...privacySettings, [e.target.name]: e.target.value });
  };

  const handlePrivacyUpdate = async () => {
    const success = await updatePrivacySettings(privacySettings);
    if (success) {
      alert('Privacy settings updated successfully!');
    } else {
      alert('Error updating privacy settings.');
    }
  };

  return (
    <div className="privacy-settings bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
      <div className="mb-4">
        <label className="block mb-2">Who Can Access Your Data:</label>
        <select
          name="dataAccess"
          value={privacySettings.dataAccess}
          onChange={handlePrivacyChange}
          className="block w-full p-2 border rounded"
        >
          <option value="Only Me">Only Me</option>
          <option value="Admins Only">Admins Only</option>
          <option value="Everyone">Everyone</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Share Data with Third-Party Services:</label>
        <input
          type="checkbox"
          name="dataSharing"
          checked={privacySettings.dataSharing}
          onChange={(e) =>
            setPrivacySettings({ ...privacySettings, dataSharing: e.target.checked })
          }
          className="mr-2"
        />
        Enable Data Sharing
      </div>
      <button onClick={handlePrivacyUpdate} className="bg-blue-500 text-white p-2 rounded">
        Update Privacy Settings
      </button>
    </div>
  );
};

export default PrivacySettings;