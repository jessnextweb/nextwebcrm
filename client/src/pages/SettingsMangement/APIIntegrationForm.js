// APIIntegrationForm.js
import React, { useState } from 'react';
import { updateAPIKey } from '../../services/integrationService';

const APIIntegrationForm = () => {
  const [apiKey, setApiKey] = useState('');
  const [integrationName, setIntegrationName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateAPIKey({ integrationName, apiKey });
    if (success) {
      alert('API Key updated successfully!');
      setApiKey('');
      setIntegrationName('');
    } else {
      alert('Error updating API Key.');
    }
  };

  return (
    <div className="api-integration-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Manage API Keys</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Integration Name:</label>
          <input
            type="text"
            value={integrationName}
            onChange={(e) => setIntegrationName(e.target.value)}
            className="block w-full p-2 border rounded"
            placeholder="Enter Integration Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">API Key:</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="block w-full p-2 border rounded"
            placeholder="Enter API Key"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Save API Key
        </button>
      </form>
    </div>
  );
};

export default APIIntegrationForm;